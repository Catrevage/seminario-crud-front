import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { Observable, catchError, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent {

  pessoas$: Observable<Pessoa[]>;



  constructor(
    private pesoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
    ){
    this.pessoas$ = this.pesoaService.list().pipe(
      catchError(error => {
        return of([]);
      })

    );

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(item: Pessoa){
    this.router.navigate(['edit', item.id], {relativeTo: this.route})
  }

}
