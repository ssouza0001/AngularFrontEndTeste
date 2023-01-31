export class ContaCorrente {
  numeroContaCorrente: string;

  constructor(init?: Partial<ContaCorrente>) {
    if (init) {
      Object.assign(this, init);
    } else {
      this.numeroContaCorrente = null;
    }
  }
}

