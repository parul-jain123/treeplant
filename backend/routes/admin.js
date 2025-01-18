


import express from 'express';
import Admin from '../models/admin.js';
import bcrypt from 'bcryptjs';
import { loginauth, logout, registerauth } from '../controllers/Auth/loginauth.js'; // Corrected 'contollers' to 'controllers'
import { authenticate } from '../middleware/VerifyToken.js';

const router = express.Router();



router.post('/registerauth', registerauth); 
router.post('/loginauth', loginauth); 
router.post('/logout', logout);

router.get('/validuser', authenticate, async (req, res) => {
  try {
    const validuser = await Admin.findById(req.userId);
    res.status(201).json({ status: 201, validuser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

export default router;
