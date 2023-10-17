export function unirObjetos<T1, U2>(obj1: T1, obj2: U2): T1 & U2 {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave1: "valor" };
const obj2 = { chave2: "valor" };

const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
//
