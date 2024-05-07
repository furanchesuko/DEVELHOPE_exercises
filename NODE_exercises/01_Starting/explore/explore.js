const crypto = require('crypto');

function generateRandomId() {
    return crypto.randomBytes(8).toString('hex');
}

const randomId = generateRandomId();
console.log("Random ID:", randomId);