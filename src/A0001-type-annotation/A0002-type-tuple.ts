// tuple
const dadosClientes1: readonly [number, string] = [1, "Luiz"];
const dadosClientes2: [number, string, string] = [1, "Luiz", "Otavio"];
const dadosClientes3: [number, string, string?] = [1, "Luiz"];
const dadosClientes4: [number, string, ...string[]] = [1, "Luiz", 'Miranda'];

// dadosClientes1[0] = 100;
// dadosClientes1[1] = 'Carlos';

console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);

// readonly array
const array1: readonly string[] = ['Luiz', 'Otavio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otavio'];

console.log(array1);
console.log(array2);
