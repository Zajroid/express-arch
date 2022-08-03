import 'dotenv/config';

/* Importing the express, path and http modules. */
import express from 'express';
import path from 'path';

import router from './routes/routes.js';

/* The above code is creating a constant variable called app and setting it equal to the express
function. The constant variable PORT is set equal to the process.env.PORT or 3000. */
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


/* Using the router. */
app.use(router);


app.get('/r1', (req, res) => {
  res.render('index');
})

/* Listening to the port. */
app.listen(PORT, (err) => {
  if (err) return console.log(`[-] err: ${err}`);

  console.log(`[+] Server been started on port: ${PORT}`);
});
