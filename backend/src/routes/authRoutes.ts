import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { registerSchema, loginSchema } from '../lib/authSchema';
import { validateRequest } from '../lib/validate';

const router = Router();

router.post('/register', validateRequest(registerSchema), registerUser);
router.post('/login', validateRequest(loginSchema), loginUser);

export default router;