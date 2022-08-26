import express from 'express';
import morgan from 'morgan';

import renderMainRouter from './routes/render/renderMain';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', renderMainRouter);
// app.use('/api', apiRouter);

app.get('/api/phrase', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '1652db78a1msh13363f41a4d25e4p1b5396jsnccb3df08c9a1',
      'X-RapidAPI-Host': 'pquotes.p.rapidapi.com',
    },
    body: '{"topic":"fun"}',
  };

  const phrase = await fetch('https://pquotes.p.rapidapi.com/api/quote', options);
  const data = await phrase.json();
  console.log(data);
  res.json(data);
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
