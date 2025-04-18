import express from 'express';
import { registerUser } from '../services/userService';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await registerUser(req.body.email, req.body.password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

export default router;