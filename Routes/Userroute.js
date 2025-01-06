import express from 'express';
import { create,fetch,update,deleted,findvalue } from '../controller/Usercontroller.js';

const router = express.Router();

// Define a POST route
router.post('/', create);

// Define other routes
router.get('/fetch', fetch);
router.put('/update/:id', update);
router.delete('/delete/:id', deleted);
router.get('/find',findvalue);
export default router;