import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../model/pessoa';

export const pessoaResolver: ResolveFn<any> = (
  route, 
  state,
  service: PessoaService = inject(PessoaService)) => {
    if(route.params && route.params['id']){
      return service.loadById(route.params['id']);
    }
    return of({id:'', nome:'', dataNascimento:''});
};
