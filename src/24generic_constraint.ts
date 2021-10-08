// function generics24<T>(arg: T): T {
//   arg.length;
//   return arg;
// }

interface Length {
  length: number;
}

function generics24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(generics24("Bambang")); // Success
console.log(generics24({ length: 0, value: 200 })); // Error
