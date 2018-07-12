import * as express from 'express';
import * as path from 'path';

import { generatePdf } from './lib';

const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, './build')));

app.use(express.json());

app.post('/pdf', async (req, res) => {
  try {
    const pdf = await generatePdf({ ...req.body });
    res.send(pdf);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(PORT, () => {
  console.log(`Open ${HOST}:${PORT} on your Chrome browser!`);
});
