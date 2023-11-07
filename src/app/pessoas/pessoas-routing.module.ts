import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { pessoaResolver } from './guards/pessoa.resolver';

const routes: Routes = [
  {path: '', component: PessoasComponent},
  {path: 'new', component: PessoaFormComponent, resolve: {pessoa: pessoaResolver}},
  {path: 'edit/:id', component: PessoaFormComponent, resolve: {pessoa: pessoaResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
