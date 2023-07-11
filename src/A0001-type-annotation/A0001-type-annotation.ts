/* eslint-disable */
//  Tipos básicos (aqui ocorre inferênciq de tipos)
let nome: string = "Luiz"; // Qualquer tipo de string: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arraysDeNumeros: Array<number> = [1, 2, 3,];
let arraysDeNumeros2: number[] = [1, 2, 3,];
let arraysDeStrings: Array<string> = ['a', 'b', 'c',];
let arraysDeStrings2: string[] = ['a', 'b', 'c',];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luiz',
  adulto: true
}

// Funções
function soma(x: number, y: number): number{
  return x=y
}
const soma2: (x: number, y: number) => number = (x, y) => x+y;
