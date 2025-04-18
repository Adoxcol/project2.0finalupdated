import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import {
  createCategoryController,
  getAllCategoriesController,
  getCategoryByIdController,
  deleteCategoryController,
} from '../controllers/categoryController';

const router = Router();


router.post('/create', authenticate, createCategoryController);


router.get('/', getAllCategoriesController);


router.get('/:id', getCategoryByIdController);


router.delete('/:id', authenticate, deleteCategoryController);

export default router;