import { Request, Response } from 'express';
import { createPost, getPosts } from '../services/postService';

export const createNewPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, tagIds, categoryIds } = req.body;
    const userId = (req as any).user?.userId;
    
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const post = await createPost(title, content, userId, tagIds, categoryIds);
    res.status(201).json(post);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getAllPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};