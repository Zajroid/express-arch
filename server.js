import 'dotenv/config';

// requires
import express from 'express';
import path from 'path';
import http from 'http';

import { errors, pageNotFound } from './middlewares/errors.js';

// consts
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(pageNotFound);
app.use(errors);

// routes
app.get('/', (req, res) => {
  res.send(`hh`);
});

app.get('/test', (req, res) => {
  console.log(res.statusCode);
  res.send(`hh`);
});

// server
app.listen(PORT, (err) => {
  if (err) return console.log(`[-] err: ${err}`);

  console.log(`[+] Server been started on port: ${PORT}`);
});
