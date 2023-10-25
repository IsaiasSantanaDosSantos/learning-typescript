interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor) {
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
        return value.split("").reverse().join("") + " " + param1 + " " + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log("Sou o segundo decorador" + " " + param1);
    return target;
  };
}

@outroDecorador("O par:amentro de outro decorator")
@inverteNomeECor("Valor1", "Valor2")
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
