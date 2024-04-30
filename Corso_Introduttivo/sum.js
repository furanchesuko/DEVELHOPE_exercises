// function sum(a,b) {
//     return a + b
// }

function sayHello(onComplete) {
    console.log("Hello")
    onComplete()
}

sayHello(() => {
    console.log("The function sayHello is completed")
})