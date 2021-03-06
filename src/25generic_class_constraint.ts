interface Product {
  sell(): void;
}

class CarProduct implements Product {
  sell(): void {
    console.log("Jual Mobil");
  }
}

class MotorProduct implements Product {
  sell(): void {
    console.log("Jual Motor");
  }
}

function sellProducts<T extends Product>(products: T[]): void {
  products.forEach((product) => product.sell());
}

sellProducts([new CarProduct(), new MotorProduct()]);
