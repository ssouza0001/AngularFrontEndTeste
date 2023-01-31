import { ContaAplicacao } from "./ContaAplicacao";
import { ContaCorrente } from "./ContaCorrente";
import { Situacao } from "./Situacao";

export class Cooperado {
    id: number;
    cpf: string;
    situacao: Situacao;
    contaAplicacao: ContaAplicacao;
    contaCorrente: ContaCorrente;

    constructor(init?: Partial<Cooperado>) {
      if (init) {
        Object.assign(this, init);
      } else {
        this.id = 0;
        this.cpf = null;
        this.situacao = null;
        this.contaAplicacao = null;
        this.contaCorrente = null;
      }
    }

}
