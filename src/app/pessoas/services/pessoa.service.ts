import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = "api/pessoa";

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Pessoa[]>(this.API);
  }
}
