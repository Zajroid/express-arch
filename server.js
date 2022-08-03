/* Importing the express, path and http modules. */
import express from 'express';
import path from 'path';
import router from './routes/routes.js';
import { PORT } from './config/config.js';

/* The above code is creating a constant variable called app and setting it equal to the express
function. The constant variable PORT is set equal to the process.env.PORT or 3000. */
const app = express();
const __dirname = path.resolve();


/* Setting the view engine to ejs and the views to the views folder. */

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* Static files */
app.use(express.static(path.join(__dirname,'public')));
app.use('/css', express.static(__dirname + 'public/css/*/**.css'));
app.use('/js', express.static(__dirname + 'public/js/*/**.js'));
app.use('/img', express.static(__dirname + 'public/img'));

// console.log(`${ path.join(__dirname,'public') }`);

/* Using the router. */
app.use(router);

/* Listening to the port. */
app.listen(PORT, (err) => {
  if (err) return console.log(`[-] err: ${err}`);

  console.log(`[+] Server been started on port: ${PORT}`);
});
