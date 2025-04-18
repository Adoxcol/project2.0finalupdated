import { createPost, getPostsByAuthor, addTagToPost } from '../repositories/postRepository';

export const createPostService = async (title: string, content: string, authorId: number) => {
  return await createPost(title, content, authorId);
};

export const getPostsByAuthorService = async (authorId: number) => {
  return await getPostsByAuthor(authorId);
};

export const addTagToPostService = async (postId: number, tagName: string) => {
  return await addTagToPost(postId, tagName);
};