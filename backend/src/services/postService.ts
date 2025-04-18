import prisma from '../prisma';

export const createPost = async (title: string, content: string, authorId: number, tagIds: number[], categoryIds: number[]) => {
  return prisma.post.create({
    data: {
      title,
      content,
      authorId,
      tags: { connect: tagIds.map(id => ({ id })) },
      categories: { connect: categoryIds.map(id => ({ id })) }
    },
    include: { tags: true, categories: true }
  });
};

export const getPosts = async () => {
  return prisma.post.findMany({
    include: { author: true, tags: true, categories: true }
  });
};