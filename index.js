import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello BeerJS!');
});

app.listen(8000, () => {
  console.log(`Lito el poio`);
});
