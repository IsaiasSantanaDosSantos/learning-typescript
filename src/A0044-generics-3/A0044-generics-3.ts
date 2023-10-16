interface PessoalProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoalProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};
const aluno1: PessoalProtocolo<string, number> = {
  nome: "luix",
  sobrenome: "miranda",
  idade: 30,
};
const aluno2: PessoalProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

const aluno3: PessoalProtocolo2 = {
  nome: "José",
  sobrenome: "Matcos",
  idade: 30,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
//
