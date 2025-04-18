import prisma from '../prisma'; // Import the instance

export const createPost = async (title: string, userId: number) => {
  return prisma.post.create({ 
    data: { 
      title, 
      userId,
      tags: { connect: [] } 
    } 
  });
};