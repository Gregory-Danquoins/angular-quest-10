export class Cocktail {
  name: string;
  price: number;
  image: string;

  constructor(name: string = "", price: number = 0, image: string = "") {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
