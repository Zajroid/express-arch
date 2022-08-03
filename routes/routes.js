import { Router } from "express";
import { mainController } from "../controllers/controllers.js";
import { testMiddleware, testMiddleware2 } from '../middlewares/errors.js';


const router = Router();

/* A middleware. */
// app.use(testMiddleware);
// app.use(testMiddleware2);


/* A route */
router.get('/', [], mainController);

router.get('/test', [], mainController);

export default router;