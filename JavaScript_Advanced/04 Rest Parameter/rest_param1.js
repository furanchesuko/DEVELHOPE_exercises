// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti 
// e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. 
// -Stampa in console l'output della funzione somma.

function somma (...rest) {
    return rest.reduce((a, arg) => a + arg ,0);
}

const calcolo = somma(1,2,3,50,120,2024);

console.log(calcolo)