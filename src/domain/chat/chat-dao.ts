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
        return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMjI5NDQzMX0.lk_OA2ttvQfub970Zg765JyggOL582IbaayVILXIkPPTApA81Lc7oGogfQyEL3g15X6TskvE06qUiiqfzRRfcQ';
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