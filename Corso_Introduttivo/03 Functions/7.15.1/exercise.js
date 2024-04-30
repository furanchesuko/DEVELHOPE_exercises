function sayHelloName(callback) {
    console.log("Hello");
    callback(); //chiamo la funzione di callback
}

function printName() {
    console.log("Francesco")
 
}

sayHelloName(printName); //callback inserita come argomento
