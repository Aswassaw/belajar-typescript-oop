// Public || Protected || Private
class Hewan8 {
  public name: string;
  private leg: number;
  protected isMamalia: boolean;

  constructor(name: string, leg: number, isMamalia: boolean) {
    this.name = name;
    this.leg = leg;
    this.isMamalia = isMamalia;
  }

  walk() {}
}

class Katak11 extends Hewan8 {
  private _eggAge: number = 4;
  private cebongAge: number = 7;
  private frogAge: number = 90;

  getAge() {
    console.log(this._eggAge + this.cebongAge + +this.frogAge);
    this.isMamalia;
  }

  get eggAge(): number {
    return this._eggAge;
  }
}

const katak11111 = new Katak11("Katak", 4, false);
console.log(katak11111.eggAge);
