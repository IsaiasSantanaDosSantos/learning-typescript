function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log("Sou a decorador!");
  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(value: string): string {
      return value.split("").reverse().join("");
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log("Sou a classe!");
  }
}

// const AnimalDecorated = decorator(Animal);
const animal = new Animal("Luiz", "roxa");
console.log(animal);
//
