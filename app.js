const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Sample App 1!');
});

app.get('/add', (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;
  res.send(`Sum is ${a + b}`);
});

app.listen(port, () => console.log(`App1 running on port ${port}`));
