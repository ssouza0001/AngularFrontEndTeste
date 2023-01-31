import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CooperadoService } from '../services/cooperado.service';
import { Cooperado } from '../models/Cooperado';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consultaCpf.component.html',
  styleUrls: ['./consultaCpf.component.css'],
})
export class ConsultaCPFComponent implements OnInit {

  @ViewChild(ModalComponent) child:ModalComponent;

  cooperado: Cooperado;
  possuiCooperado: boolean = false;
  cpf: string;

  constructor(private cpfService: CooperadoService) { }

  ngOnInit() {
    this.cpf = '';
  }

  getCPF() {
    this.cpfService.getCooperadoByCPF(this.cpf).subscribe(
      (cooperado: Cooperado) => {
        if (cooperado) {
          this.cooperado = cooperado;
          this.possuiCooperado = true;
        }
        else {
          this.possuiCooperado = false;
          this.cooperado = null;
          this.child.showModal();
        }
      },
      (error) => {console.log(error);
    });
  }

}
