import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { createProfileController, getProfileByUserController } from '../controllers/profileController';

const router = Router();


router.post('/create', authenticate, createProfileController);


router.get('/me', authenticate, getProfileByUserController);

export default router;