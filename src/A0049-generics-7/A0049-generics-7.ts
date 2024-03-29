export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

// console.log(isNumber("123"));
// console.log(isNumber(123));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return retorno;
}

console.log(soma(1, 2, 3));
// Na tela do instrutor funcionou dessa forma ↓, mas aqui apenas da de baixo...
// console.log(soma(...[1, 2, 3, "a", "b", "c"]));
console.log(soma<number | string>(...[1, 2, 3, "a", "b", "c", 1]));
console.log(soma("a", "b", "c"));
//
