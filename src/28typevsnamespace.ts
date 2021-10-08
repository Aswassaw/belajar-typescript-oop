// Interface hanya bisa memakai object type
interface Dinosaur {
  name: string;
}

// Type bisa string, number, bahkan object
type Phoenix = {
  name: string;
};

// Interface auto tergabung
interface Unicorn {
  name: string;
}

interface Unicorn {
  // Interface ini akan bergabung dengan interface di atas karena namanya sama
  speed: number;
}

// Type tidak auto tergabung dan akan error (bisa digabung dengan suatu cara)
type GodzillaName = {
  name: string;
};

type GodzillaPower = {
  // Akan error
  power: number;
};

type Godzilla = GodzillaName & GodzillaPower;
