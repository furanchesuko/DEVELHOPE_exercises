const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

Object.freeze(smartphone)  //freeza la compontente dell oggetto
smartphone.price = 100;  //in questo caso la componente price
 
console.log(smartphone);
