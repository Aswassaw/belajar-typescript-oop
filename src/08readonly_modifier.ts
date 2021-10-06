// Read Only (Hanya bisa dibaca dan tidak bisa diubah)
class Person {
  readonly race: string = "Human";
}

const person = new Person();
console.log(person);
// person.race = "Perempuan";
