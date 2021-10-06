// Overriding (Markeplace method milik parent, saling terkait dengan inheritance)
class Hewan7 {
  name: string = "";

  breath(): void {
    console.log("Parent Breathing...");
  }
}

class Doge extends Hewan7 {
  breath(): void {
    console.log("Child Breathing");
  }
}

const doge1 = new Doge();
doge1.breath();
