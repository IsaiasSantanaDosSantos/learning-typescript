type ObterChaveFn = <O, K extends keyof O>(object: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (object, chave) => object[chave];

const animal = {
  cor: "Rosa",
  vacinas: ["vacina 1", "vacina 2"],
  idade: 10,
};
const vacinas = obterChave(animal, "vacinas");
const cor = obterChave(animal, "cor");

console.log(vacinas, cor, obterChave(animal, "idade"));
//
