//
type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magento" | "Amarelo" | "Preto";
type CorPreferida = CorRGB | CorCMYK;

const pessoa2: Pessoa = {
  idade: 30,
  nome: "Luiz",
  salario: 200_000, // 200.000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa2, "Azul"));
console.log(pessoa2);
