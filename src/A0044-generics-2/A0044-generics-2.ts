type MeuTipo = number;
// Assim:
const arrayNumeros1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// E assim(generic):
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arrayNumeros + "\n" + arrayNumeros1);

async function prromiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

prromiseAsync().then((result) => console.log(result + 1));
prromiseAsync().then((result) => console.log(result + 1));
//
