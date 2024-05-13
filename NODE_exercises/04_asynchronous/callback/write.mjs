import * as fs from "fs"

const data = "Hello, this is a text file!"

fs.writeFile('exercise.txt', data, (err) => {
    if (err) {
        console.error(err)
    }

    console.log("Stà funzionando")
})