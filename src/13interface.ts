interface AndroidPhone {
  name: string;

  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("Menu Tapped");
  }
  home(): void {
    console.log("Home Tapped");
  }
  back(): void {
    console.log("Back Tapped");
  }
}

class Asus implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("Menu Tapped");
  }
  home(): void {
    console.log("Home Tapped");
  }
  back(): void {
    console.log("Back Tapped");
  }
}

class GameA {
  private _phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this._phone = phone;
  }

  start(): void {
    console.log("Game Started!");
  }

  pause(): void {
    console.log("Game Paused!");
  }

  home(): void {
    this._phone.home();
  }
}

const samsung = new Samsung("J2 Prime");
const game = new GameA(samsung);
game.start();
game.pause();
game.home();

interface ApplePhone {
  home(): void;
}

class iPhone implements ApplePhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  home(): void {
    console.log("Muncul global menu");
  }
}

const iphoneX = new iPhone ("Iphone X");
// const game2 = new GameA(iphoneX);
