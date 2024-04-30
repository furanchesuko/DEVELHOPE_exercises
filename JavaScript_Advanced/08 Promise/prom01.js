//Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 
//utilizzando Promises per una migliore gestione degli errori.
//La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.


function fetchDataFromAPI() {
    //creo la promise
    return new Promise((resolve,reject) => {
      //creo delay di risposta
      setTimeout (() => {
        //condizione da rispettare
        const obj = {name: "John", age: 30}
          if(obj) {
            //messaggio di risoluzione
            resolve("Dati recuperati con successo. Ecco i dati recuperati: " + JSON.stringify(obj));
          } else {
            //messaggio d'errore
            reject(new Error("Errore rilevato: Impossibile recuperare i dati"))
          }  
      }, 3000)   
    })
}

console.log("Recupero dati in corso ...")

//do parametri in caso di risoluzione e in caso d'errore
fetchDataFromAPI()
.then((data) => console.log(data))
.catch((error) => console.log(error))


//La funzione fetchDataFromAPI dovrebbe accettare un parametro che rappresenta l'endpoint o l'identificativo della risorsa da richiedere, 
//invece di un parametro che rappresenta direttamente i dati da recuperare, come recoveredData. Di solito, la funzione contatterebbe un'API reale per ottenere questi dati.

//La stringa di risoluzione Dati recuperati con successo... non segue il camelCase o un'altra convenzione di denominazione consistente per le stringhe. 

//Inoltre, si consiglia di utilizzare lo spread operator o altri metodi per copiare oggetti anziché JSON.stringify per scopi non di serializzazione.




// function fetchDataFromAPI(recoveredData) {
//   return new Promise((resolve,reject) => {
//      setTimeout (() => {
//       if(recoveredData === obj) {
//           resolve(`Dati recuperati con successo. Ecco i dati recuperati: ` + JSON.stringify(obj));
//       } else {
//           reject("Impossibile recuperare i dati")
//       }  
//       }, 3000)   
//   })
// }

// console.log("Recupero dati in corso ...")

// const obj = {name: "John", age: 30}

// let handleData = fetchDataFromAPI(obj).then((data) => {
//   console.log(data)
// }). catch((error) => {
//   console.log(error)
// })