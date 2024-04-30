// function canPlay() {
//     let sport = " Football";
    
//     if (true) {
//     let personName = "Cosimo";
//     }
    
//     console.log(personName + sport);  
//     }
    
//     canPlay();
 
//la variabile personName è dichiarata all'interno dello scope del modulo if
//l'errore è che il console.log contenente la variabile personName si trova fuori dallo scope corretto

function canPlay() {
  let sport = " Football";
  
  if (true) {
  let personName = "Cosimo";
  console.log(personName + sport);
  }
  
}
  
canPlay();