import { Cooperado } from '../models/Cooperado';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conta-aplicacao',
  templateUrl: './conta-aplicacao.component.html',
  styleUrls: ['./conta-aplicacao.component.css']
})
export class ContaAplicacaoComponent {
  @Input() cooperado: Cooperado;

}
