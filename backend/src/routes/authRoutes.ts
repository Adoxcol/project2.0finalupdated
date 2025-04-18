import express from 'express';
import { register, login } from '../services/authService';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await register(req.body.email, req.body.password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.json({ token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
});

export default router;