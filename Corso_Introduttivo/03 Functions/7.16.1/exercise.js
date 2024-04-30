function sum() {
  return 5 + 5;
}

console.log(sum());

// let changeSum = (num1) => {
//     return num1 + 5;  
// }

//stesso risultato ma sintassi più lunga
    
let changeSum = () => 5 + 5;

console.log(changeSum())