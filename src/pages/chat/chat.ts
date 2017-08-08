import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../../domain/chat/mensagem';
import { ChatService } from '../../domain/chat/chat-service';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage implements OnInit {

  public mensagensServidor: Mensagem[];
  mensagem: string = '';
  data: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: Http, 
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _chatService: ChatService) {

  }

  ionViewWillLeave(){
    /*this.mensagens.push({
      mensagemEspecial: true,
      mensagem: `${this.usuario} desconectou`
    });*/
  }

  ionViewDidLoad(){
    /*this.mensagens.push({
      mensagemEspecial: true,
      mensagem: `${this.usuario} está conectado`
    });*/
  }

  ngOnInit() {
    this.atualizarMensagens();
  }

  enviarMensagem(){
    let mensagem = new Mensagem(null, 1, this.mensagem, new Date(), null, false, null);
    this._chatService.enviarMensagem(mensagem)
      .subscribe(data => {
        this.data.response = data["_body"]; 
        mensagem = null;
        this.atualizarMensagens();
      }, erro => {
        this._alertCtrl.create({
          title: 'Problema na conexão com o BRB',
          buttons: [{text: 'Ok'}],
          subTitle: 'Não foi possível enviar a mensagem.'
        }).present();
      });
  }

  atualizarMensagens(){
    let loader = this._loadingCtrl.create({
      content: 'Recuperando últimas mensagens'
    });
    loader.present();
    this._chatService.atualizarMensagens()
      .map(res => res.json())
      .toPromise()
      .then(mensagens => {
        this.mensagensServidor = mensagens,
        loader.dismiss(); 
      }).catch (erro => { 
        loader.dismiss();
        this._alertCtrl.create({
          title: 'Problema na conexão com o BRB',
          buttons: [{text: 'Ok'}],
          subTitle: 'Não foi possível recuperar a lista de mensagens.'
        }).present();
    });
  }
}
