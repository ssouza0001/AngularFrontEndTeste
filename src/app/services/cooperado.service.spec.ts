/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { Cooperado } from '../models/Cooperado';
import { CooperadoService } from './cooperado.service';

describe('Service: Cooperado', () => {
  let cpf: string;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CooperadoService]
    });
  });

  it('Deve ...', inject([CooperadoService], (service: CooperadoService) => {
    expect(service).toBeTruthy();
  }));

  it('Deve realizar chamada HTTP', waitForAsync(inject([CooperadoService], (cooperadoService) => {
    cpf = '11122233344';
    cooperadoService.getCooperadoByCPF(cpf).subscribe(result => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toBe(Cooperado);
    });
  })));
});
