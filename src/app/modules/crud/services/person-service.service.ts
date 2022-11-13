import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService extends ApiServiceService {

  constructor(private http: HttpClient) {
    super();
  }

  getEndereco(cep: string) {
    return this.http.get('https://viacep.com.br/ws/' + cep + '/json/');
  }

  cadPerson(objDados: any) {
    return this.http.post(this.apiUrl + 'person', objDados);
  }

  getPerson() {
    return this.http.get(this.apiUrl + 'person');
  }

  getPersonEspecifica(id: number) {
    return this.http.get(this.apiUrl + 'person/' + id);
  }

  updatePerson(objDados: any, id: number) {
    return this.http.put(this.apiUrl + 'person/' + id, objDados);
  }

  deletePerson(id: number) {
    return this.http.delete(this.apiUrl + 'person/' + id);
  }
}
