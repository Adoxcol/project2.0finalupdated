import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProfile = async (userId: number, bio: string) => {
  return await prisma.profile.create({
    data: { bio, userId },
  });
};

export const getProfileByUser = async (userId: number) => {
  return await prisma.profile.findUnique({
    where: { userId },
  });
};