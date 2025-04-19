import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validateRequest = (schema: ZodSchema) => 
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
      });
      next(); 
    } catch (error: any) {
      res.status(400).json({
        message: 'Validation failed',
        errors: error.errors,
      });
    }
  };