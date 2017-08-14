import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { NotificacoesService } from  '../domain/notificacoes/notificacoes-service';

import 'rxjs/add/operator/toPromise'; 
import {HttpModule} from '@angular/http';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'd6eb4eee'
  },
  'push': {
    'sender_id': '674696413178',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    NotificacoesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    NotificacoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotificacoesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
