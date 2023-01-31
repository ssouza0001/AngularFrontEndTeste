import { Cooperado } from '../models/Cooperado';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conta-corrente',
  templateUrl: './conta-corrente.component.html',
  styleUrls: ['./conta-corrente.component.css']
})
export class ContaCorrenteComponent {
  @Input() cooperado: Cooperado;
}
