import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cooperado } from '../models/Cooperado';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CooperadoService {
  cooperado: Cooperado;
  baseURL = 'http://localhost:4200/api/base-cpf.json';

  constructor(private http: HttpClient) { }

  getCooperadoByCPF(cpf: string): Observable<Cooperado> {

    return this.http.get<Cooperado[]>(`${this.baseURL}`).pipe(
      map((cooperados: Cooperado[]) => {
        const cooperadoEncontrado = cooperados.filter( c => c.cpf === cpf )
        return cooperadoEncontrado.length > 0 ? cooperadoEncontrado[0] : null
      }
    )
    );
  }

}
