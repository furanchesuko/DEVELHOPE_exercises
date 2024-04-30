// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti 
// e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds (...rest) {
    return rest.filter(only => only % 2 === 0)
}

const calcolo = filterOutOdds (1,2,3,4,20,22,327,420)

console.log(calcolo)
