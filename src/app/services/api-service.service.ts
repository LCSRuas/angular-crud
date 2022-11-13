import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  readonly apiUrl: string;
  readonly requestOptions: any;
  readonly headers_object: any;
  private headers;

  constructor() {
    // ## URL da API
    this.apiUrl = environment.apiUrl; // API LOCAL

    // ## Configuração do Header da API
    // ## Padrão de transição de dados
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }
}
