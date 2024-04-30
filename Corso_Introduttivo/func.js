let myNumber = 10

function myFunction(a) {        //cambio valore copia myNumber
    a = 20
}

console.log(myNumber)

myFunction(myNumber)

console.log(myNumber)

//passaggio valore: variabile numerica quando chiamo funzione e passo myNumber
//viene creata una copia di myNumber