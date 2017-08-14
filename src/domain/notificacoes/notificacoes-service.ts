import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from  'ionic-angular'
import { Observable } from 'rxjs';
import {Alerta} from '../../domain/alerta';

@Injectable()
export class NotificacoesService{

    data: any = [];

    constructor(private _http: Http, 
                private _alertCtrl: AlertController,
                private _loadingCtrl: LoadingController){

    }

    getNotificacoes() : Observable<Alerta[]>{

        let mensagenRetorno : Alerta[];

        //Local       
        let endereco = 'http://localhost:8080/api/alertas';
        let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMzU5MDMwN30.LbduBAT52TKty37zEGAeLf_0Jz6X2FC2rzI9bETEihuedY7hTDXCAjLlL2iLLyHed4p6a6mXFVHibJ0ipw2qHA';
                
        //Produção        
        /*
        let endereco = 'http://138.68.167.143:8080/api/comunicacaos';
        let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMDYwMjk2MH0.xVn34Gi-uKHWPD9PW-MFUut4w3UqvrtVCRE_DtfSCaoH5PaMmoqdthBozWiV_VK5Jpl97roM3HJWuDWYb7wetg';
        */

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + chave);

        return this._http.get(endereco,{headers:headers})
              .map(res => res.json());      
        
    }

    atualizaMensagens(mensagem){
        //PRODUCAO    
    //let link = 'http://138.68.167.143:8080/api/comunicacaos';
    //let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMDYwMjk2MH0.xVn34Gi-uKHWPD9PW-MFUut4w3UqvrtVCRE_DtfSCaoH5PaMmoqdthBozWiV_VK5Jpl97roM3HJWuDWYb7wetg';
    
    //LOCAL
    let link = 'http://localhost:8080/api/alertas';
    let chave = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwMzU5MDMwN30.LbduBAT52TKty37zEGAeLf_0Jz6X2FC2rzI9bETEihuedY7hTDXCAjLlL2iLLyHed4p6a6mXFVHibJ0ipw2qHA';
    
        for(let data of mensagem) {
        console.log("id:"+data.id);
        console.log("cDCLIENTE:"+data.cDCLIENTE);
        console.log("sQALERTA:"+data.sQALERTA);
        console.log("tEXTOALERTA:"+data.tEXTOALERTA);        
        console.log("campanha.id:"+data.campanha.id);
        console.log("campanha.QCAMPANHA:"+data.campanha.sQCAMPANHA);
        console.log("campanha.dESCRICAOCAMPANHA:"+data.campanha.dESCRICAOCAMPANHA);
        console.log("campanha.tEXTOCAMPANHA:"+data.campanha.tEXTOCAMPANHA);

        let mensagemPut = {id:data.id, sQALERTA:1,cDCLIENTE:data.cDCLIENTE,
          tEXTOALERTA:data.tEXTOALERTA,dATA:new Date(),
          campanha: {id: data.campanha.id, sQCAMPANHA: data.campanha.sQCAMPANHA,dESCRICAOCAMPANHA: data.campanha.dESCRICAOCAMPANHA,
          tEXTOCAMPANHA: data.campanha.tEXTOCAMPANHA} 
        };

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + chave);
 
        this._http.put(link, mensagemPut, {
            headers:headers,
          }).subscribe(data => {
            this.data.response = data["_body"]; 
                    
          }, error => {
              console.log("Oooops!");
        });
    };

    }
}

