const _ = require('lodash');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const crypto = require('crypto');

const SERVER_SECRET = '123';

const handleError = (err, ctx) => {
  console.log(err.message);
  ctx.status = 500;
  ctx.body = err.message;
};

const extractPhoneNumberFromJwt = (jwt) => {
  console.log(jsonwebtoken.decode(jwt));
  return jsonwebtoken.decode(jwt).phone;
}

const makeJWT = (payload) => {
  return jsonwebtoken.sign(payload, SERVER_SECRET, {
    noTimestamp: true
  });
};

const validateJWT = (token, userPhone) => {
  return makeJWT({ phone: userPhone }) === token;
}

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/${filePath}`, 'utf8', (err, contents) => {
      if (!err) {
        resolve(contents);
      } else {
        reject(err);
      }
    })
  });
}

const saveFile = () => {

}

const hash = (payload) => {
  return crypto.createHash('sha256').update(payload).digest('hex');
}

module.exports = {
  handleError,
  makeJWT,
  validateJWT,
  readFile,
  saveFile,
  hash,
  extractPhoneNumberFromJwt,
};