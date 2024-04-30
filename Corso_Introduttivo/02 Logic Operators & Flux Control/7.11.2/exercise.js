//Tariffa BB --> 50€
//Tariffa HB --> 80€
//Tariffa FB --> 100€

let prezzo = 'FF';

switch (prezzo) {
    case 'BB' :
       console.log('La tariffa è di 50€');
       break;
    case 'HB' :
       console.log('La Tariffa è di 80€');
       break;
    case 'FB' :
       console.log('La tariffa è di 100€');
       break;
    default:
       console.log("errore!");
}