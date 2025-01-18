import { addUser } from '../controllers/contact.js';
import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();
router.post('/contact', addUser);

export default router;


