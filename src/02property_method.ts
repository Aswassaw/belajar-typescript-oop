class Hewan3 {
  name: string = "";
  kaki: number = 0;
  isMamalia: boolean = false;

  breath(): void {
    console.log(`${this.name} is breathing.`);
  }
}

const hewan3 = new Hewan3();
hewan3.name = "Kucing";
hewan3.breath();
