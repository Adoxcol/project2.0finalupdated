import express from 'express';
import { createNewPost } from '../services/postService';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  try {
    const post = await createNewPost(req.body.title, (req as any).user.userId);
    res.status(201).json(post);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;