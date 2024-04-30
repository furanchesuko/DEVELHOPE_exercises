let user = {
  name: "Cosimo",
  age: 30,
  };

console.log(user)

let newUser = {};  //creo copia "vuota"

for (let change in user) {     //indirizzo la copia a user
    newUser[change] = user[change];   
}

newUser.name = "Paolo";   //do nuovo nome

console.log(newUser)