const _ = require('lodash');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');


const SERVER_SECRET = '123';

const handleError = (err, ctx) => {
  console.log(err.details);
  ctx.body = err.details;
};

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
    console.log(`${__dirname}/${filePath}`);
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

module.exports = {
  handleError,
  makeJWT,
  validateJWT,
  readFile,
  saveFile,
};