import { Router } from "express";

/* Importing the errors and pageNotFound functions from the errors.js file. */
import { errors, pageNotFound, testMiddleware, testMiddleware2 } from '../middlewares/errors.js';


const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>main</h1></h1>');
})

router.get('/tt1', (req, res) => {
  res.send('<h1>tt1</h1></h1>');
})

export default router;