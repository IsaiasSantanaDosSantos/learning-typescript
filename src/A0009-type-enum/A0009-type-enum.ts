//
enum Cores {
  VERMELHOR = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

enum Cores {
  ROXO = "ROXO",
  VERDE = 201,
  ROSA,
}

// console.log(Cores);
// console.log(Cores.VERMELHOR);
// console.log(Cores[10]);
// console.log(Cores.ROXO);

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
