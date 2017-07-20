import { Component, OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController, AlertController  } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Mensagem} from '../../domain/mensagem';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage implements OnInit{

  public mensagensServidor: Mensagem[];
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
        //Local
        /*
        let endereco = 'http://localhost:8080/api/comunicacaos';
        let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMDU5ODY1Nn0.OwFxbxlqwmEOY9qlhdEumCQ_HLzYFQUHqrTVsOXlVwrdA8ep-xl9icq-Rq5O7py-PEhLKKZpPcA6Wq4atVuTNQ';
        */

        //Produção
        
        let endereco = 'http://138.68.167.143:8080/api/comunicacaos';
        let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMDYwMjk2MH0.xVn34Gi-uKHWPD9PW-MFUut4w3UqvrtVCRE_DtfSCaoH5PaMmoqdthBozWiV_VK5Jpl97roM3HJWuDWYb7wetg';
      

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + chave);

    this._http.get(endereco,{headers:headers})
      
      .map(res => res.json())
      .toPromise()
        .then(mensagens => {
                          this.mensagensServidor = mensagens,
                          //console.log(this.mensagensServidor);
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
