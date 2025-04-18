import { Request, Response } from 'express';
import {
  createCategoryService,
  getAllCategoriesService,
  getCategoryByIdService,
  deleteCategoryService,
} from '../services/categoryService';

export const createCategoryController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const category = await createCategoryService(name);
    res.status(201).json(category);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const getAllCategoriesController = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await getAllCategoriesService();
    res.status(200).json(categories);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const getCategoryByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const category = await getCategoryByIdService(Number(id));
    res.status(200).json(category);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const deleteCategoryController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await deleteCategoryService(Number(id));
    res.status(204).send();
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};