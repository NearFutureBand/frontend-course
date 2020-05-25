const _ = require('lodash');

const { readFile } = require('../helpers');

const getUsers = async () => {
  const result = await readFile('../data/users.json');
  return JSON.parse(result).map(userObject => ({
    _id: userObject._id,
    name: userObject.name,
    picture: userObject.picture,
    index: userObject.index,
  }));
}

const getUserByIndex = async (index) => {
  let result = await readFile('../data/users.json');
  result = JSON.parse(result);
  if (result[index]) {
    delete result[index].passwordHash;
  }
  return result[index];
}

const getUserByPhone = async (phone) => {
  const usersData = await readFile('../data/users.json');
  const result = _.find(JSON.parse(usersData), { phone });
  return result;
}

module.exports = {
  getUsers,
  getUserByIndex,
  getUserByPhone
}