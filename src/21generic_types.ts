type Generic2<T> = T;

function generic2<T>(val: T): Generic2<T> {
  return val;
}

console.log(generic2("Bambang"));
console.log(generic2(31));
