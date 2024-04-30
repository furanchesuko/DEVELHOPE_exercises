let obj = {
    "key" : "value",
    "number" : 10,
    "func" : (arg) => arg + 2,
    "obj" : {
        "key" : 2
    }
}

function changeValue(obj, key, val) {  //passa RIFERIMENTO
    obj[key] = val;
}

changeValue(obj, "number", 15)
console.log(obj.number)

function changeNumber(num) {
    num = num + 5;
}
console.log(obj.number)

let num = 10;                          //passa VALORE
changeNumber(num)
console.log(num)