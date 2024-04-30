// Crea una funzione chiamata runCallbacks che accetta un array di funzioni 
//di callback come argomento.

// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono 
//nell'array.

function runCallbacks(callbacks) {
  //per ogni valore di callbackArray(callbacks) gli passiamo un argomento vuoto sottoforma di callback(valori())
  callbacks.forEach(valori => valori());       
}

function firstCallback() {
  console.log("Ciao mi chiamo Francesco,");
}

function secondCallback() {
  console.log("ho 29 anni,");
}

function thirdCallback() {
  console.log("e mi piace la pizza.");
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];

runCallbacks(callbackArray);