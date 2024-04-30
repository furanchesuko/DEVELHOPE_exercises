// In questo esercizio dato un array di studenti:

// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.


const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

  const name = studenti.forEach(names => console.log(names.nome));
  
  const cerca = studenti.find(vote => vote.voto > 90);
  console.log(cerca)

  const media = studenti.reduce((a,calcolo) => a + calcolo.voto ,0);
  console.log(Math.round(media) /studenti.length)
 
  const caps = studenti.map(upper => (upper.nome).toUpperCase());
  console.log(caps)
 
  const over85 = studenti.filter(good => good.voto >85)
  console.log(over85)