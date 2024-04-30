//Convertire la seguente funzione basata su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) { 
//   setTimeout(() => { 
//   const result = arg1 + arg2; 
//   if (result % 2 !== 0) { 
//   callback(null, result); 
//   } else { 
//   callback(new Error('Result is not odd!'), null); } }, 1000);
//   }

function promiseBased(result){
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      if(result % 2 !== 0) {
          resolve("Result is even!")
      } else {
          reject("Result is not odd!")
      }
    }, 2000)
  })
}

promiseBased(10).then((data) => {
  console.log(data)
}).catch ((error) => {
  console.log(error)
})