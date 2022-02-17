const crypto = require('crypto');

console.log(crypto.createHash('sha256').update('123').digest('hex')); 