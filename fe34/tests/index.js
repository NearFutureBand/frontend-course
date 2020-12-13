const axios = require('axios');

const sum = (a, b ) => {
  return a + b;
}

const copyArray = (arr) => [...arr];

const mutableFunction = (obj) => {
  obj.checked = true;
  obj.value = 'newValue'
}

const login = async (phone, password) => {
  // +18465683597
  const response = await axios.post('http://localhost:3001/auth/sign-in', { phone, password });
  return response;
}

module.exports = {
  sum,
  copyArray,
  mutableFunction,
  login,
}