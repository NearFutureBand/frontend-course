const USERS = require('../database/usersData.json');

module.exports = (req, res) => {
  const { index } = req.query;
  if (!index) {
    res.status(200).json(
      USERS.map(userObject => ({
        _id: userObject._id,
        name: userObject.name,
        picture: userObject.picture,
        index: userObject.index,
      }))
    );
    return;
  }
  if (index < 0 || index >= USERS.length) {
    res.status(422).send(`Индекс должен быть от 0 до ${USERS.length - 1}`);
    return;
  }
  res.status(200).send(USERS[index]);
}