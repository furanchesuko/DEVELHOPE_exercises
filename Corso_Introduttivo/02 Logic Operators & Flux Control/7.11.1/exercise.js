let valore = 'cane';

switch(typeof valore) {
   case 'number' : 
     console.log('number');
     break;
   case 'boolean' : 
     console.log('boolean');
     break;
   case 'string' :
     console.log('stringa');
     break;
   default :
     console.log('valore non riconosciuto');
     break;
}