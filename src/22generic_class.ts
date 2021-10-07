interface Generic3<T> {
  propA: T;
  methodA(): T;
}

class GenericClass<T> implements Generic3<T> {
  propA: T;

  constructor(propA: T) {
    this.propA = propA;
  }

  methodA(): T {
    return this.propA;
  }
}

console.log(new GenericClass("Bambang").methodA());
