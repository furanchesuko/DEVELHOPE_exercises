// Implementa la funzione lanciaDadi che:

//     Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio
// di due dadi.

//     Visualizzi in console il risultato del lancio Lancio dei dadi: 
//Dado 1 = ${dado1}, Dado 2 = ${dado2}.

//     Utilizzi il metodo setTimeout per ritardare l' esecuzione 
//della funzione "lanciaDadi" di 2 secondi.

//     Prima dello scadere dei 2 secondi stampa in console il messaggio
// "Lancio dei dadi in corso..."

// Per la generazione casuale dei numeri dei dadi
// servirà utilizzare i metodi Math.floor() e Math.random() 

console.log("Lancio dei dadi in corso...")  //stampo la stringa che si esegua la funzione

function lanciaDadi(dado1,dado2) {
  dado1 = Math.floor(Math.random() * 6) +1  //creo la pool di numeri per dado1 da 1 a 6 e che sia casuale
  dado2 = Math.floor(Math.random() * 6) +1  //creo la pool di numeri per dado2 da 1 a 6 e che sia casuale
  console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`)  //stampo il lancio dei dadi con i valori presi a caso dichiarati prima
}

setTimeout (lanciaDadi, 2000)  //imposto delay a 2 secondi prima di chiamare la funzione