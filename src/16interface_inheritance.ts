interface Vehicle {
  name: string;
  wheels: number;
}

interface Car extends Vehicle {
  door: number;
}

interface Motor extends Vehicle {
  jok: number;
}

// Implements Car yang Extends Vehicle
class Civix implements Car {
  name: string = "Civix";
  wheels: number = 4;
  door: number = 2;
}

class Supra implements Motor {
  name: string = "Supra";
  wheels: number = 2;
  jok: number = 1;
}
