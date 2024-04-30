// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto 
//alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.

// Utilizza setInterval per chiamare la funzione contoAllaRovescia
// ogni secondo.

// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio
// che indica che il conto alla rovescia è terminato.


//dichiare variabile con valore di inizio
let tempoRimanente = 10;
//stampo messaggio iniziale e valore di inizio
console.log("Conto alla rovescia in corso...")
console.log(tempoRimanente)
//creo funzione che ad ogni intervallo abbassa il valore iniziale
function contoAllaRovescia() {
    tempoRimanente--;
    console.log(tempoRimanente)
}
//creo intervallo per ciclare il valore che viene man mano diminuito ogni secondo
let id = setInterval(contoAllaRovescia, 1000);
//imposto delay e fine dell'intervallo con messaggio di chiusura
setTimeout(() => {
   clearInterval(id)
   console.log("Conto alla rovescia terminato!")
}, 10000);
//richiamo infine la funzione
contoAllaRovescia()