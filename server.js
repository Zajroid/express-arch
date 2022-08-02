import 'dotenv/config';

// requires
import express from 'express';

// const
const app = express();
const PORT = process.env.PORT || 3000;


// routes
app.get('/', (req, res) => {
  res.send(`hh`);
});


// server
app.listen(PORT, (err) => {
  if (err) return console.log(`[-] err: ${err}`);

  console.log(`[+] Server been started on port: ${PORT}`);
});
