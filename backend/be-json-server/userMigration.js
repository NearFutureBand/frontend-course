const axios = require('axios');

const getUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
}

(async () => {
  const users = await getUsers();
  users.forEach(async (user) => {
    try {
      axios.post("http://localhost:3001/register", {
        ...user,
        password: "password1234"
      });
    } catch (err) {
      console.log(err);
    }
  });
})();