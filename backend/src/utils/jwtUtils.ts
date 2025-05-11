import jwt, { SignOptions } from 'jsonwebtoken';

export const generateAccessToken = (payload: object): string => {
  return jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY as string,
  } as SignOptions);
};

export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET as jwt.Secret, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  } as SignOptions);
};

export const verifyAccessToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};

export const verifyRefreshToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET!);
};