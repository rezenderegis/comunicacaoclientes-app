import { Component, OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController, AlertController  } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage implements OnInit{

  usuario: string = '';
  mensagem: string = '';
  mensagens: object[] = [];

  constructor(/*public db: AngularFireDatabase, */public navCtrl: NavController, 

  public navParams: NavParams,
  private _http: Http, 
  private _loadingCtrl: LoadingController,
  private _alertCtrl: AlertController
  ) {
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

  ngOnInit() {

    let loader = this._loadingCtrl.create({
      content: 'Recuperando últimas mensagens'
    });

    loader.present();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMDU5ODY1Nn0.OwFxbxlqwmEOY9qlhdEumCQ_HLzYFQUHqrTVsOXlVwrdA8ep-xl9icq-Rq5O7py-PEhLKKZpPcA6Wq4atVuTNQ");

//    this._http.get('https://aluracar.herokuapp.com/',{headers:headers})

    this._http.get('http://localhost:8080/api/comunicacaos',{headers:headers})
      
      .map(res => res.json())
      .toPromise()
        .then(mensagens => {
                          console.log(mensagens);
                          loader.dismiss(); 
                        })
                        .catch ( err => { 
                            console.log(err);
                            loader.dismiss();
                            this._alertCtrl.create({
                                title: 'Problema na conexão com o BRB',
                              buttons: [{text: 'Ciente'}],
                                subTitle: 'Não foi possível recuperar a lista de mensagens.'}).present();
                        });    


  }

}
