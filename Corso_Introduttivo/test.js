function minimumEven(number1, number2, number3) {
    let smallNumber
    if(number1 <= number2 && number1 <= number3) {
        smallNumber = number1;
        } else if(number2 <= number1 && number2 <= number3) {
        smallNumber = number2;
        } else {
        smallNumber = number3;
    }
    return smallNumber % 2 === 0;
}

// function minimumEven(number1, number2, number3) {
//     let minimumNumber = number1;
//     if(number2 < minimumNumber) {
//         minimumNumber = number2
//     }
//     if(number3 < minimumNumber) {
//         minimumNumber = number3
//     }
//     return minimumNumber % 2 === 0
// }

console.log(minimumEven(2,2,2))