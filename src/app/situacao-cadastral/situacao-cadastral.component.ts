import { Component, Input } from '@angular/core';
import { Cooperado } from '../models/Cooperado';

@Component({
  selector: 'app-situacao-cadastral',
  templateUrl: './situacao-cadastral.component.html',
  styleUrls: ['./situacao-cadastral.component.css']
})
export class SituacaoCadastralComponent {
  @Input() cooperado: Cooperado;

}
