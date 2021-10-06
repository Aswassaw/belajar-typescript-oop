abstract class Hewan9 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log("Makan");
  }

  abstract move(): void;
}

class Mamalia extends Hewan9 {
  constructor(name: string) {
    super(name);
  }

  move(): void {
    console.log(`${this.name} Walk`);
  }
}

class Unggas extends Hewan9 {
  constructor(name: string) {
    super(name);
  }

  move(): void {
    console.log(`${this.name} Fly`);
  }
}

const sapi = new Mamalia("Sapi");
sapi.eat();
sapi.move();

const elang = new Unggas("Elang");
elang.eat();
elang.move();
