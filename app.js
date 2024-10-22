const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const PORT = 3000;

const db = pgp('postgres://username:password@localhost:5432/moj-projekat');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('cao, neno!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});