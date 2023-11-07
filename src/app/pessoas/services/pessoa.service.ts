import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = "api/pessoa";

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  list() {
    return this.httpClient.get<Pessoa[]>(this.API)
    .pipe(
      first(),
      //delay(1000),
      //tap(pessoas => console.log(pessoas)),
    );
  }

  loadById(id: string){
    return this.httpClient.get<Pessoa>(`${this.API}/${id}`);
  }
  save(record: Partial<Pessoa>) {
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Pessoa>){
    var result = this.httpClient.post<Pessoa>(this.API, record).subscribe(result => console.log(result));
    alert("Pessoa Cadastrada com sucesso!");
    this.router.navigate([''], {relativeTo: this.route});
    return result;

  }

  private update(record: Partial<Pessoa>){
    var result = this.httpClient.put<Pessoa>(`${this.API}/${record.id}`, record).subscribe(result => console.log(result));
    alert("Registro Atualizado Com Sucesso!");
    this.router.navigate([''], {relativeTo: this.route});
    return result;
  }
}
