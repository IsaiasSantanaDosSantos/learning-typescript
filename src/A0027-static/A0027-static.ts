// SUPER CLASSE ↓
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "000.000.000-00";

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa("Luiz", "Miranda", 30, "332.225.225-00");
const pessoa2 = Pessoa.criaPessoa("Maria", "Josefina");
pessoa1.cpf = "332.225.225-99";
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
