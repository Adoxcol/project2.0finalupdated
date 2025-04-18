import { Request, Response } from 'express';
import {
  createPostService,
  getPostsByAuthorService,
  addTagToPostService,
} from '../services/postService';

export const createPostController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content } = req.body;
    const authorId = req.body.userId; // Injected by auth middleware
    const post = await createPostService(title, content, authorId);
    res.status(201).json(post);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const getPostsByAuthorController = async (req: Request, res: Response): Promise<void> => {
  try {
    const authorId = req.body.userId; // Injected by auth middleware
    const posts = await getPostsByAuthorService(authorId);
    res.status(200).json(posts);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const addTagToPostController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { postId, tagName } = req.body;
    const updatedPost = await addTagToPostService(postId, tagName);
    res.status(200).json(updatedPost);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};