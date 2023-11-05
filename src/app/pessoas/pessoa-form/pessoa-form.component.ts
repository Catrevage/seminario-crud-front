import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaService } from '../services/pessoa.service';


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent {

  form: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private service: PessoaService
    ){

      this.form = this.formBuilder.group({
        nome:[null],
        dataNascimento:[null]
      })

  }


  onSubmit(){
    this.service.save(this.form.value);
  }

  onCancel(){
    
  }



}
