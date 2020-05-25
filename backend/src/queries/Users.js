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
  if (!result[index]) {
    throw new Error('Не существует пользователя с таким index');
  }
  return result[index];
}

module.exports = {
  getUsers,
  getUserByIndex
}