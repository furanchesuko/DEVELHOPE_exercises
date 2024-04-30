// Scrivi una funzione chiamata doubleArray che accetta un array 
//e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento
// dell'array e restituire un nuovo array con i valori trasformati.


function doubleArray(arr, callback) {
    //ritorna valori array(numbers) passandoli prima per la callback(doubleValue) 
    return arr.map(callback)  
}

//dichiaro l'array (arr)
const numbers = [1, 2, 3, 4, 5];
//dichiaro la funzione per raddoppiare il valore
function doubleValue(num) {
return num * 2;
}
//dichiaro variabile della callback di (arr,callback)
const doubledNumbers = doubleArray(numbers, doubleValue);

console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]