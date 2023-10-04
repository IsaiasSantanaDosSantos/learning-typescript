export class Empresa {
  public readonly nome: string; // public não necessário se não colocar é por padrão.
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradore(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa("Facebook", "10.145.145/0001-25");
const colaborador1 = new Colaborador("Luiz", "Otavio");
const colaborador2 = new Colaborador("Jose", "Marcos");
const colaborador3 = new Colaborador("Maria", "Silva");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradore();
