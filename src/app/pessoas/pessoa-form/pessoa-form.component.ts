import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../model/pessoa';


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent {

  form: FormGroup = this.formBuilder.group({
    id:[''],
    nome:[''],
    dataNascimento:['']
  })
  pessoa: Pessoa;



  constructor(
    private formBuilder: FormBuilder,
    private service: PessoaService,
    private route: ActivatedRoute
    ){
      //this.form
      this.pessoa = this.route.snapshot.data['pessoa'];
      console.log(this.pessoa);
      this.form.setValue({
        id: this.pessoa.id,
        nome: this.pessoa.nome,
        dataNascimento: this.pessoa.dataNascimento
      })

  }


  onSubmit(){
    this.service.save(this.form.value);
  }

  onCancel(){

  }



}
