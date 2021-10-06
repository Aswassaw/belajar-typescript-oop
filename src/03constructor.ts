class Hewan4 {
  name: string;
  leg: number;

  constructor(name: string, leg: number) {
    this.name = name;
    this.leg = leg;
  }
}

const bird = new Hewan4("Eagle", 2);
console.log(bird);

// ----------------------
class Hewan4A {
  constructor(public name: string, public leg: number) {}
}

const froggy = new Hewan4A("Katak Panjang", 4);
console.log(froggy);
