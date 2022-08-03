import 'dotenv/config';

/* Importing the express, path and http modules. */
import express from 'express';
import router from './routes/routes.js';

/* The above code is creating a constant variable called app and setting it equal to the express
function. The constant variable PORT is set equal to the process.env.PORT or 3000. */
const app = express();
const PORT = process.env.PORT || 3000;


/* A route. */
app.use(router);


/* Listening to the port. */
app.listen(PORT, (err) => {
  if (err) return console.log(`[-] err: ${err}`);

  console.log(`[+] Server been started on port: ${PORT}`);
});
