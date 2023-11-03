import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent {

  pessoas: Observable<Pessoa[]>;
  displayedColumns = ["_id","nome", "dataNascimento"];


  constructor(private pesoaService: PessoaService ){
    this.pessoas = this.pesoaService.list();
  }

}
