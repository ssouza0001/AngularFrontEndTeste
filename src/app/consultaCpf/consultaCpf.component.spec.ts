import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsultaCPFComponent } from './consultaCpf.component';
import { CooperadoService } from 'src/app/services/cooperado.service';
import { ModalComponent } from '../modal/modal.component';
import { Cooperado } from 'src/app/models/cooperado';
import { of } from 'rxjs';

describe('ConsultaCPFComponent', () => {
  let component: ConsultaCPFComponent;
  let fixture: ComponentFixture<ConsultaCPFComponent>;
  let cooperadoService: CooperadoService;
  let mockCooperado: Cooperado;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ConsultaCPFComponent, ModalComponent ],
      providers: [CooperadoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCPFComponent);
    component = fixture.componentInstance;
    cooperadoService = TestBed.get(CooperadoService);
    mockCooperado = {
      id: 1,
      cpf: "11122233344",
      situacao: {
        nome: "Mariane de Sousa Oliveira",
        statusSituacao: "Ativa"
      },
      contaAplicacao: {
        numeroConta: "557932-4"
      },
      contaCorrente: {
        numeroContaCorrente: "778461-8"
      }
    };
  });

  it('Deve inicializar o campo CPF como string vazia', () => {
    component.ngOnInit();
    expect(component.cpf).toEqual('');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar um cooperado', () => {
    spyOn(cooperadoService, 'getCooperadoByCPF').and.returnValue(of(mockCooperado));

    component.getCPF();

    expect(component.possuiCooperado).toBeTruthy();
    expect(component.cooperado).toEqual(mockCooperado);
  });

  it('Deve retornar null e mostrar o modal', () => {
    spyOn(cooperadoService, 'getCooperadoByCPF').and.returnValue(of(null));
    spyOn(component.child, 'showModal').and.returnValue(null);

    component.getCPF();

    expect(component.possuiCooperado).toBeFalsy();
    expect(component.child.showModal).toHaveBeenCalled();
  });
});
