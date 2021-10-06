class Burung1 {
  private leg: number = 2;

  // Harus mengembalikan number
  getLeg(): number {
    return this.leg;
  }

  // Harus tidak mengembalikan apapun
  fly(): void {
    console.log("Flying...");
  }

  // Mengembalikan promise
  async eat(): Promise<string> {
    return "Async Data";
  }
}

console.log(new Burung1().getLeg());
new Burung1().fly();
