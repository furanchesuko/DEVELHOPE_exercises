function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

luckyDraw('Joe')
    .then(result => {
        console.log(result);
        return luckyDraw('Caroline');
    })
    .then(result => {
        console.log(result);
        return luckyDraw('Sabrina');
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("There has been an error:", error.message);
    });
    
//Un altro modo di scrivere la promise resolution

/* luckyDraw('Joe')
    .then((res) => console.log(res))
    .then(() => luckyDraw('Caroline'))
    .then((res) => console.log(res))
    .then(() => luckyDraw('Sabrina'))
    .then((res) => console.log(res))
    .catch((err) => console.error("There has been an error", err)) */