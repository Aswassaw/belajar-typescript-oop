// Static Method / Property (Bsa dipanggil tanpa harus instansiasi class)
class Ayam {
  static leg: number = 2;

  // Bisa mengakses leg menggunakan this.leg karena sama2 static
  static walk(): void {
    console.log(`Ayam berjalan dengan ${this.leg} kaki`);
  }

  getKaki() {
    // console.log(this.kaki); // Error
    console.log(Ayam.leg);
  }
}

// Pemanggilan Static Method / Property
Ayam.walk();

// Pemanggilan Method hasil Instansiasi
const ayam2 = new Ayam();
ayam2.getKaki();

const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();

ayam3.getKaki();
ayam4.getKaki();
ayam5.getKaki();

Ayam.leg = 4;

ayam3.getKaki();
ayam4.getKaki();
ayam5.getKaki();
