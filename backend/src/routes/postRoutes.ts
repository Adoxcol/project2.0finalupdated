import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import {
  createPostController,
  getPostsByAuthorController,
  addTagToPostController,
} from '../controllers/postController';

const router = Router();


router.post('/create', authenticate, createPostController);


router.get('/my-posts', authenticate, getPostsByAuthorController);


router.put('/add-tag', authenticate, addTagToPostController);

export default router;