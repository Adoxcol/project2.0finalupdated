import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
   
    res.status(401).json({ error: 'Unauthorized: Missing token' });
    return; 
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
    return; 
  }

 
  req.body.userId = decoded.userId;

  
  next();
};