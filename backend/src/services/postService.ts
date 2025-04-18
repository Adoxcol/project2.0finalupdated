import { createPost } from '../repositories/postRepository';

export const createNewPost = async (title: string, userId: number) => {
  if (!title) throw new Error('Title is required');
  return createPost(title, userId);
};