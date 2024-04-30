//-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
//-Utilizzare setTimeout per simulare un'operazione asincrona.

function isPriceOver(price) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (price > 1000) {
                resolve(`Il prezzo di ${price}€ è troppo alto !!!`);
            } else {
                reject (`Il prezzo di ${price}€ è un affare !!!`);
            }
        }, 2000)
    })
}

isPriceOver(200).then ((data) => {
    console.log(data);
}).catch ((error) => {
    console.log(error);
})