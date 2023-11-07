import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../model/pessoa';


@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.scss']
})
export class PessoasListaComponent {

  @Input() pessoas:Pessoa[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ["_id","nome", "dataNascimento","actions"];

  constructor( ){

  }

  onAdd(){

    this.add.emit(true);
  
  }

  onEdit(item: Pessoa){
    this.edit.emit(item);
  }

  onDelete(item: Pessoa){
    this.delete.emit(item);
  }

 
}
