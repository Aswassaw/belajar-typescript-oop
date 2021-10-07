interface Generic<T> {
  propA: T;
}

function genericFunc<T>(val: T): Generic<T> {
  let data: Generic<T> = {
    propA: val,
  };

  return data;
}

console.log(genericFunc<string>("Bambang"));
console.log(genericFunc<number>(17727));
