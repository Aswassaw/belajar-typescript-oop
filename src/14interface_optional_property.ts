interface Teacher {
  name: string;
  age: number;
  phone?: string;
}

class DosPem implements Teacher {
  name: string;
  age: number;
  phone?: string | undefined;

  constructor(name: string, age: number, phone?: string) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
}

const suratman = new DosPem("Suratman", 41);
console.log(suratman);
