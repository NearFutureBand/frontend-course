
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/src/static'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user/:id', (req, res) => {
  res.send(`<div style="background-color: red">USER id= ${req.params.id}</div>`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

