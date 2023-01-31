import { getTestBed } from '@angular/core/testing';
import * as $ from 'jquery';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultaCPFComponent } from './consultaCpf.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CooperadoService } from '../services/cooperado.service';
import { Observable, of, pipe } from 'rxjs';
import { Cooperado } from '../models/Cooperado';
import { map } from 'rxjs/operators';
import { ModalComponent } from '../modal/modal.component';


describe('ConsultaCPFComponent', () => {
  let component: ConsultaCPFComponent;
  let fixture: ComponentFixture<ConsultaCPFComponent>;
  let cpf: string;
  let service: CooperadoService;
  const childComponent = jasmine.createSpyObj('ModalComponent', ['child'])


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        ConsultaCPFComponent,
        ModalComponent
       ],
      providers: [{
        provide: CooperadoService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cpf = '';
    service = TestBed.inject(CooperadoService);
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve fazer request para obter o usuario', ()=> {
    let response: Cooperado[];
    response =
    [{
      "id": 1,
      "cpf": "11122233344",
      "situacao": {
        "nome": "Mariane de Sousa Oliveira",
        "statusSituacao": "Ativa"
      },
      "contaAplicacao": {
        "numeroConta": "557932-4"
      },
      "contaCorrente": {
        "numeroContaCorrente": "778461-8"
      }
    }];

    spyOn(service, 'getCooperadoByCPF').and.returnValue(of(response).pipe(
      map((cooperados: Cooperado[]) => {
        const cooperadoEncontrado = cooperados.filter( c => c.cpf === cpf )
        return cooperadoEncontrado.length > 0 ? cooperadoEncontrado[0] : null
      }
    ) ));
    service.getCooperadoByCPF(cpf);
    // component.getCPF()

  });


});
