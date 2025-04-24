import { Request, Response } from 'express';
import prisma from '../prisma';


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