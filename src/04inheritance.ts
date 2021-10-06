class Hewan5 {
  name: string = "";
  leg: number = 0;

  breath(): void {
    console.log("Breathing...");
  }
}

class Burung extends Hewan5 {
  color: string = "brown";
}

const bird1 = new Burung();
console.log(bird1);
bird1.name = "Elang";
bird1.leg = 2;
console.log(bird1);
bird1.breath();
