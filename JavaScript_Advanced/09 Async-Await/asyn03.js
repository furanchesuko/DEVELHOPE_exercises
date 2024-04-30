/* Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza
la funzione "caricaModulo" per caricare i moduli A, B e C, 
attendendo il completamento di ciascuna operazione prima di passare alla successiva.

Gestisci eventuali errori nel caricamento dei moduli stampando in console 
"Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

Alla fine, se tutti i moduli sono stati caricati con successo, 
stampa in console "Veicolo spaziale pronto per il lancio!". */

function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
        const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
        setTimeout(() => {
            if (tempoCaricamento < 1500) {
                resolve(`Il modulo ${modulo} è stato caricato.`);
            } else {
                reject(`Errore durante il caricamento del modulo ${modulo}.`);
            }
        }, tempoCaricamento);
    });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori
async function lanciaVeicoloSpaziale() {
    //definizione per provar il blocco all'interno
    try {
        //dichiaro variabili dei moduli A,B,C passandoli come argomento di caricaModulo
        console.log("Caricamento moduli in corso...")
        const callA = await caricaModulo("A")
        console.log(callA)
        const callB = await caricaModulo("B")
        console.log(callB)
        const callC = await caricaModulo("C")
        console.log(callC)
        //stampo messaggio quando tutte le chiamate sono risolte
        console.log("Veicolo spaziale pronto per il lancio!")
        //se qualcosa nel blocco non risolve va in errore con il messaggio analogo
    } catch (error) {
        console.log("Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.", error)
    }
}

lanciaVeicoloSpaziale()