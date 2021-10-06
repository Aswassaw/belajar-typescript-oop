// Setter dan Getter (Method untuk mendapatkan dan mengubah property yang private)
class ProductA {
  private _price: number = 0;
  private _discount: number = 0.05;

  set price(val: number) {
    this._price = val;
  }

  get price(): number {
    return this._price - this._price * this._discount;
  }
}

const productA = new ProductA();
productA.price = 100000;
console.log(productA.price);
