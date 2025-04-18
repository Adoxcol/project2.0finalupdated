import { createProfile, getProfileByUser } from '../repositories/profileRepository';

export const createProfileService = async (userId: number, bio: string) => {
  return await createProfile(userId, bio);
};

export const getProfileByUserService = async (userId: number) => {
  return await getProfileByUser(userId);
};