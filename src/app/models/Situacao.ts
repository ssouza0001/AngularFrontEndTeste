export class Situacao {
  nome: string;
  statusSituacao: string;

  constructor(init?: Partial<Situacao>) {
    if (init) {
      Object.assign(this, init);
    } else {
      this.nome = null;
      this.statusSituacao = null;
    }
  }
}
