import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { createNewPost, getAllPosts, getPostSummary } from '../controllers/postController'; 
import { authenticate } from '../middleware/auth';

const router = express.Router();


router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);


router.post('/posts', authenticate, createNewPost);


router.get('/posts', authenticate, getAllPosts); 


router.get('/posts/summary', authenticate, getPostSummary); 

export default router;