export class ContaAplicacao {
  numeroConta: string;

  constructor(init?: Partial<ContaAplicacao>) {
    if (init) {
      Object.assign(this, init);
    } else {
      this.numeroConta = null;
    }
  }
}
