import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Http, Headers} from '@angular/http';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import 'rxjs/add/operator/map'
import { Push, PushToken} from '@ionic/cloud-angular';

import {Injectable, Injector} from "@angular/core";


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = HomePage;

  public paginas = [
    { titulo: 'Chat', componente: ChatPage }
  ];

  @ViewChild(Nav) public nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
     public push: Push, 
     private _http: Http,
     //public navCtrl:NavController,
         protected injector: Injector

     ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    console.log(this.getActivePage.name);

   // let view = this.nav.getActive();
   // if (view.instance ChatPage {

    //}

/*
    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
      this.salvarIDFCM(2, t.token);
    });

    this.push.rx.notification()
      .subscribe((msg) => {
    alert("RECEBEU MSG COM APP ABERTO "+ msg.title + ': ' + msg.text);
    // this.abrePagina(ChatPage);
    });*/
  
}


   getActivePage(): string {
    return this.injector.get(NavController);
  }

  abrePagina(pagina){
    this.nav.push(pagina.componente);
  }

 salvarIDFCM(cDCLIENTE, iDFCM){

    //PRODUCAO    
    let link = 'http://138.68.167.143:8080/api/pushes'
    let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMTIwMTIxMH0.r4hmnzILm5aJ5cVWd7fLZUNOyvT7Zp2Y0G8662PFAYo9r00lA6WNkwCFWbB32KRU-cgoOqeVrRIzHEVzfwAsFg';
    
    //LOCAL
   // let link = 'http://localhost:8080/api/comunicacaos';
   // let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMDc0MDA0M30.rUTOl6SAe99pETgUGw7Ie7DaVzNVY_6MwvETUdAAJCyB4NBTRvvCILnFzouzgl17uuG84icPhLwAPH6-R1c8yg';
    //let myData = JSON.stringify({username: this.data.username});

    let dadosMensagem = {  "cDCLIENTE": 2,  "iDFCM": iDFCM, "sQMENSAGEM": 2}

    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + chave);
 
    this._http.post(link, dadosMensagem, {
        headers:headers,
        })
        .subscribe(data => {
    //    this.data.response = data["_body"]; 
        
    }, error => {
        console.log("Oooops!");
    });    

    
  }

}

