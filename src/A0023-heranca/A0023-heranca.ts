export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return "Isso vem do aluno " + this.nome + " " + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return " Isso vem do cliente " + this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Luiz", "Miranda", 30, "332.225.225955");
const aluno = new Aluno("Luiz", "Miranda", 30, "332.225.225955");
const client = new Cliente("Luiz", "Miranda", 30, "332.225.225955");

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(client.getNomeCompleto());
