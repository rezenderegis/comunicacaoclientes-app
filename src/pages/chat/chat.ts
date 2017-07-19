import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {

  usuario: string = '';
  mensagem: string = '';
  mensagens: object[] = [];

  constructor(/*public db: AngularFireDatabase, */public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = 'usuario1'; //this.navParams.get('usuario');
    this.mensagens = [
      {usuario:'usuario1', mensagem:'mensagem1', hora:'23:00', lida:true},
      {usuario:'usuario1', mensagem:'mensagem2', hora:'23:01', lida:true}
    ];
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

  enviarMensagem(){
    /*this.db.list('/chat').push({
      usuario: this.usuario;
      mensagem: this.mensagem;
    }).then(() => {
      // mensagem enviada
    }).catch(() => {
      // erro
    });*/
    this.mensagens.push({
      usuario: 'usuario2',
      mensagem: this.mensagem,
      hora: '23:02',
      lida:false
    });
    this.mensagem = '';
  }

}
