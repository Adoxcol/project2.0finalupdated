  import { Request, Response } from 'express';
import { createProfileService, getProfileByUserService } from '../services/profileService';

export const createProfileController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { bio } = req.body;
    const userId = req.body.userId; 
    const profile = await createProfileService(userId, bio);
    res.status(201).json(profile);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const getProfileByUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.body.userId; 
    const profile = await getProfileByUserService(userId);

    if (!profile) {
      res.status(404).json({ error: 'Profile not found' });
      return; 
    }

    res.status(200).json(profile);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};