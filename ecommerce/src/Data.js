import fridhult from "./assets/fridhult.jpg";
import morabo from "./assets/morabo.jpg";
import uppland from "./assets/uppland.jpg";
import poang from "./assets/poang.jpg";
import adde from "./assets/adde.jpg";

export const categories = ["sofa", "armchair", "chair"];

export const colors = ["yellow", "gray", "white", "green"];

class Product {
  constructor(name, price, imagePath, summary, category, color) {
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.summary = summary;
    this.category = category;
    this.color = color;
  }
}

export const products = [
  new Product(
    "fridhult",
    299,
    fridhult,
    "Sleeper sofa, Skiftebo yellow",
    categories[0],
    colors[0]
  ),
  new Product(
    "morabo",
    699,
    morabo,
    "Sofa, Gunnared dark gray/wood",
    categories[0],
    colors[1]
  ),
  new Product(
    "uppland",
    849,
    uppland,
    "Sofa, Blekinge white",
    categories[0],
    colors[2]
  ),
  new Product(
    "poang",
    199,
    poang,
    "Armchair, birch veneer/Gunnared light green",
    categories[1],
    colors[3]
  ),
  new Product("adde", 12.5, adde, "Chair, white", categories[2], colors[2]),
];

export function getProducts() {
  return products;
}
