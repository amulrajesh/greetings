import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as constants from '../../environments/Constants';
import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class GreetingsCommonService {
    
    constructor(private http: HttpClient){
        //Nothing to do
    }

    public greetings(){
        return this.http.get(constants.GREETINGS, 
            { headers: this.getHeaders()
             , 'responseType': 'text'}
             );
    }

    private getHeaders(){
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'text/html',
            'responseType': 'text'
        });
        return headers;
    }
}