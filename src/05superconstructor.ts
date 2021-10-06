class Hewan6 {
  name: string;
  leg: number;

  constructor(name: string, leg: number) {
    this.name = name;
    this.leg = leg;
  }
}

class Katak77 extends Hewan6 {
  isPoison: boolean;

  constructor(name: string, leg: number, isPoison: boolean) {
    super(name, leg);
    this.isPoison = isPoison;
  }
}

const katak77 = new Katak77("Katak Babi", 4, true);
console.log(katak77);
