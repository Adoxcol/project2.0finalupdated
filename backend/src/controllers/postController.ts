import { Request, Response } from 'express';
import { createPost, getPosts } from '../services/postService';
import prisma from '../prisma';

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
    const page = parseInt(req.query.page as string) || 1; 
    const limit = parseInt(req.query.limit as string) || 10; 
    const skip = (page - 1) * limit;

    
    const posts = await prisma.post.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' }, 
      select: {
        id: true,
        title: true,
        content: true,
        numericValue: true,
        author: {
          select: {
            email: true, 
          },
        },
      },
    });

    
    const total = await prisma.post.count();

    res.json({ posts, total });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};


export const getPostSummary = async (req: Request, res: Response): Promise<void> => {
  try {
    const summary = await prisma.post.aggregate({
      _sum: { numericValue: true }, 
      _avg: { numericValue: true }, 
    });

    res.json({
      total: summary._sum.numericValue,
      average: summary._avg.numericValue,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch summary' });
  }
};