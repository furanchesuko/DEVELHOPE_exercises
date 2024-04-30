let primitive = true;

if (typeof primitive === 'number') {
   console.log('è un numero');
}  else if (typeof primitive === 'boolean') {
    console.log('è un booleano');
}  else if (typeof primitive === 'string') {
    console.log('è una stringa');
}   else if (typeof primitive === 'undefined') { 
    console.log('Non inserito alcun valore');
}  else console.log('Non ancora studiato');