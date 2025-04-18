import {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
} from '../repositories/categoryRepository';

export const createCategoryService = async (name: string) => {
  return await createCategory(name);
};

export const getAllCategoriesService = async () => {
  return await getAllCategories();
};

export const getCategoryByIdService = async (categoryId: number) => {
  const category = await getCategoryById(categoryId);
  if (!category) throw new Error('Category not found');
  return category;
};

export const deleteCategoryService = async (categoryId: number) => {
  const category = await getCategoryById(categoryId);
  if (!category) throw new Error('Category not found');
  return await deleteCategory(categoryId);
};