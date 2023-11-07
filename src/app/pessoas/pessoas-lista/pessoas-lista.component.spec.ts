import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasListaComponent } from './pessoas-lista.component';

describe('PessoasListaComponent', () => {
  let component: PessoasListaComponent;
  let fixture: ComponentFixture<PessoasListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasListaComponent]
    });
    fixture = TestBed.createComponent(PessoasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
