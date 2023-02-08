/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { Cooperado } from '../models/Cooperado';
import { CooperadoService } from './cooperado.service';

describe('Service: Cooperado', () => {
  let cpf: string;
  let service: CooperadoService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CooperadoService]
    });
    service = TestBed.get(CooperadoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Deve ...', inject([CooperadoService], (service: CooperadoService) => {
    expect(service).toBeTruthy();
  }));

  it('Deve retornar um cooperado caso o CPF seja encontrado na base', () => {
    const mockCooperados = [      { cpf: '11122233344', situacao: {nome: 'Mariane de Sousa Oliveira'} }   ];
    const cpf = '11122233344';

    service.getCooperadoByCPF(cpf).subscribe((cooperado) => {
      expect(cooperado.cpf).toEqual(cpf);
      expect(cooperado.situacao.nome).toEqual('Mariane de Sousa Oliveira');
    });

    const req = httpMock.expectOne(`${service.baseURL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCooperados);
  });


  it('Deve retornar nulo caso o CPF seja invalido', () => {
    const mockCooperados = [       { cpf: '11122233344', situacao: {nome: 'Mariane de Sousa Oliveira'} }    ];
    const cpf = '11122233345';

    service.getCooperadoByCPF(cpf).subscribe((cooperado) => {
      expect(cooperado).toBeNull();
    });

    const req = httpMock.expectOne(`${service.baseURL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCooperados);
  });


});
