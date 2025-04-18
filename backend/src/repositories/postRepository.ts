import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (title: string, content: string, authorId: number) => {
  return await prisma.post.create({
    data: { title, content, authorId },
  });
};

export const getPostsByAuthor = async (authorId: number) => {
  return await prisma.post.findMany({
    where: { authorId },
    include: { tags: true },
  });
};

export const addTagToPost = async (postId: number, tagName: string) => {
  const tag = await prisma.tag.upsert({
    where: { name: tagName },
    update: {},
    create: { name: tagName },
  });

  return await prisma.post.update({
    where: { id: postId },
    data: { tags: { connect: { id: tag.id } } },
  });
};