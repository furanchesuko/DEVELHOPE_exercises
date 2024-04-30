// Scrivi una funzione chiamata filterArray che accetta un array 
//e una funzione di callback come argomenti. 

//-La funzione callback deve filtrare e restituire i numeri pari passati
// come argomento alla funzione filterArray

// filterArray dovrebbe restituire un nuovo array contenente solo 
//gli elementi per i quali la funzione di callback restituisce true.

function filterArray(arr, callback) {
    //ritorno i valori dell'array filtrati attraverso la callback
    return arr.filter(callback)
}

function isEven(num) {     //callback
    // la callback deve prendere un argomento e restituire i numeri pari
    return num % 2 === 0
}

const numbers = [1, 2, 3, 4, 5, 6];  //arr
//richiamo funzione e la assegno ad una variabile
const evenNumbers = filterArray(numbers, isEven); //arr,callback

console.log(evenNumbers); // Should output [2, 4, 6]