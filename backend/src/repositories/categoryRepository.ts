import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCategory = async (name: string) => {
  return await prisma.category.create({
    data: { name },
  });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany();
};

export const getCategoryById = async (categoryId: number) => {
  return await prisma.category.findUnique({
    where: { id: categoryId },
    include: { posts: true },
  });
};

export const deleteCategory = async (categoryId: number) => {
  return await prisma.category.delete({
    where: { id: categoryId },
  });
};