import { Component, OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController, AlertController, Platform  } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Alerta} from '../../domain/alerta';
import {NotificacoesService} from  '../../domain/notificacoes/notificacoes-service'

@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html',
})
export class NotificacoesPage {

  public mensagensServidor: Alerta[];
  mensagem: string = '';
  mensagens: object[] = [];
  data: any = [];

  constructor(
      public navParams: NavParams,
      private _http: Http, 
      private _loadingCtrl: LoadingController,
      private _alertCtrl: AlertController,
      private _notificacoesService : NotificacoesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacoesPage');
  }

  limparMensagens(){
      this.putMensagem();          
  }

  putMensagem(){
    
    this._notificacoesService.atualizaMensagens(this.mensagensServidor);
    
    //limpa a tela
    this.mensagensServidor = [];    
  }

  ngOnInit() {
 
       this._notificacoesService.getNotificacoes().subscribe(msgs => {
            console.log("Foto cadastrada com sucesso");
            this.mensagensServidor = msgs;
        }, erro => console.log(erro)); 

      //console.log("retorno:"+this._notificacoesService.getNotificacoes());  
  } 

}
