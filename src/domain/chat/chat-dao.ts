import { Injectable } from '@angular/core';
import { Mensagem } from './mensagem';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ChatDao {

    constructor(private _http: Http) {}

    private getUri(){
        //return 'http://138.68.167.143:8080/api/comunicacaos';
        return 'http://localhost:8080/api/comunicacaos';
    }

    private getChave(){
        return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMjk4NzgyNH0.tqPt6XhtdvNAmEaGZUz_KcBl2Vjaxpvro-HnWK0qXBEr6gyKUrHiNzhJ39ib3InoTKoOW8FUjHKmEIpGrMkvqA';
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.getChave());
        return headers;
    }

    atualizarMensagens() {  
        return this._http.get(this.getUri(), {headers: this.getHeaders()});
    }

    enviarMensagem(mensagem: Mensagem){
        return this._http.post(this.getUri(), mensagem, {
            headers:this.getHeaders(),
        });
    }

}