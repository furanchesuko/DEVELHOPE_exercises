function Smartphone (brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let iPhone = new Smartphone ("Iphone", "14", 800)
let samsung = new Smartphone ("Samsung", "S23", 700)

console.log(iPhone)
console.log(samsung)