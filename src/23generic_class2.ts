class ClassA {
  name: string = "Class A";
}

class ClassNew<T> {
  classProp: T;

  constructor(classProp: T) {
    this.classProp = classProp;
  }
}

const classA = new ClassA();
const classNew = new ClassNew(classA);
