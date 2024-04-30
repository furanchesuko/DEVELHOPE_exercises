let numbers = [1, 6, 3]

console.log(numbers)

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

//console.log(numbers[numbers.length - 1])

let newLength = numbers.push(5) //aggiunge a fine //accetta parametro e ritorna valore

console.log(numbers)

//console.log(newLength)

let removedElement = numbers.pop()  //rimuove da coda array

console.log(numbers)

console.log(`Removed element ${ removedElement }`)  // $ string interpolation 