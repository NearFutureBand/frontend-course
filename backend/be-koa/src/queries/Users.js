const _ = require('lodash');

const { readFile, shortenUserInfo, saveFile } = require('../helpers');

const getUsers = async () => {
  const result = await readFile('../data/users.json');
  return JSON.parse(result).map(userObject => shortenUserInfo(userObject));
}

const getUserByIndex = async (index) => {
  let result = await readFile('../data/users.json');
  result = JSON.parse(result);
  return result[index];
}

const getUserByPhone = async (phone) => {
  const usersData = await readFile('../data/users.json');
  const result = _.find(JSON.parse(usersData), { phone });
  return result;
}

const updateUserInformation = async (users) => {
  const _usersData = await readFile('../data/users.json');
  const usersData = JSON.parse(_usersData);
  //const index = _.findIndex(usersData, { phone: users[0].phone });

  users.forEach(u => {
    usersData[u.index] = u;
  });
  
  await saveFile('../data/users.json', usersData);
  console.log('successfully saved');
}

module.exports = {
  getUsers,
  getUserByIndex,
  getUserByPhone,
  updateUserInformation,
}