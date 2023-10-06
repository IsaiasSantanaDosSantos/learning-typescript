// SUPER CLASSE ↓
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    console.log(" SETTER");
    this._cpf = valor;
  }

  get cpf(): string {
    console.log(" GETTER");
    return this._cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa("Luiz", "Miranda", 30, "332.225.225-00");
pessoa.cpf = "332.225.225-99"; // set
console.log(pessoa.cpf); // get
