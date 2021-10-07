interface IStore {
  name: string;
  profit: number;

  getProfit(): number;
}

class OldStore implements IStore {
  name: string = "Old Store";
  profit: number = 0.02;

  getProfit(): number {
    return this.profit;
  }
}

class NewStore implements IStore {
  name: string = "New Store";
  profit: number = 0.05;

  getProfit(): number {
    return this.profit;
  }
}

class LaptopProduct {
  private _store: IStore;
  private _name: string;
  private _price: number;

  constructor(store: IStore, name: string, price: number) {
    this._store = store;
    this._name = name;
    this._price = price;
  }

  sell(): void {
    console.log(
      `${this._name} harga jualnya adalah ${
        this._price + this._store.profit * this._price
      }`
    );
  }
}

class PhoneProduct {
  private _store: IStore;
  private _name: string;
  private _price: number;

  constructor(store: IStore, name: string, price: number) {
    this._store = store;
    this._name = name;
    this._price = price;
  }

  sell(): void {
    console.log(
      `${this._name} harga jualnya adalah ${
        this._price + this._store.profit * this._price
      }`
    );
  }
}

const oldStore = new OldStore();
const newStore = new NewStore();

const asus = new LaptopProduct(oldStore, "Asus U31SD", 4500000);
asus.sell();

const infinix = new PhoneProduct(newStore, "Infinix 10 Hot S", 18999);
infinix.sell();
