import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAplicacaoComponent } from './conta-aplicacao.component';

describe('ContaAplicacaoComponent', () => {
  let component: ContaAplicacaoComponent;
  let fixture: ComponentFixture<ContaAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaAplicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
