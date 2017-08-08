import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Mensagem } from './mensagem';
import { ChatDao } from './chat-dao';

@Injectable()
export class ChatService {

    constructor(private _chatDao: ChatDao) {}

    atualizarMensagens() {  
        return this._chatDao.atualizarMensagens();
    }

    enviarMensagem(mensagem: Mensagem){
        return this._chatDao.enviarMensagem(mensagem);
    }

}