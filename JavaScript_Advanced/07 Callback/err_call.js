// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. 

// Se la funzione di callback genera un errore, catturalo e gestiscilo.

// Modificare la funzione performOperation per gestire l'errore e registrare 
//un messaggio di errore.


function performOperation(a, b, callback) {
    let result = a + b
    if (a === Number(a) && a !== NaN && a !== Infinity && a !== -Infinity &&
        b === Number(b) && b !== NaN && b !== Infinity && b !== -Infinity) {
        callback(null, `Il risultato è ${result}`)
    } else {
        callback(new Error("Errore riscontrato"), null)
    }
}

function displayResult(result, error) {
    if (result) {
        console.log(result);
    } else {
        console.log(error);
    }    
}

performOperation(true, 7, displayResult);


// function performOperation(a, b, callback) {
    
//     let sum = a + b;
//     //creo condizione che se non rispettata genera errore
//     //if (typeof(sum) === "number" && sum !== NaN && sum !== Infinity && sum !== -Infinity) {
//     if (a === Number(a) && a !== NaN && a !== Infinity && a !== -Infinity &&
//         b === Number(b) && b !== NaN && b !== Infinity && b !== -Infinity ) {   //condizione vista in esercitazioni con Giovanni su suggerimento di Francesca Bonato
//         callback(null, sum)
//     } else {
//         callback(new Error("C'è un errore"), null)
//     }  
// }
 
// function displayResult(error,result) {
//     //se il valore generato nella funzione performOperation non rispetta la condizione allora entra in error
//     if (error) {
//         console.log(error)
//         //altrimenti continua il ciclo e stampa il risultato
//     } else {
//         console.log(`Il risultato è ${result}`)
//     } 
// }
 
// performOperation(4, 5, displayResult);

    

// function performOperation(a, b, callback) {
//     callback(a+b)
//  }
 
//  function displayResult(result) {
//     //tramite try/catch gestisco eventuali errori
//     try {
//         //condizione da rispettare
//         if (result === 8) {
//             console.log(result)
//         } else {
//             //lancio messaggio d'errore
//             throw new Error("Il risultato è sbagliato")
//         }
//     } catch (error) {
//         console.error(error)
//     }     
//  }
 
//  performOperation(5, 3, displayResult);