//
export function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat("10", "20"));
console.log(addOrConcat(10, "20"));
console.log(addOrConcat("10", 20));
console.log(addOrConcat(true, 20));
console.log(addOrConcat(10, true));
console.log(addOrConcat(true, true));
console.log(addOrConcat('10', true));
