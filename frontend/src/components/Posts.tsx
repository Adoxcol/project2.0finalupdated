// src/components/Posts.tsx
import React, { useState } from 'react';
import { useGetPostsQuery, useAddPostMutation } from '../app/apiSlice';

const Posts = () => {
  const [title, setTitle] = useState('');
  const { data: posts, isLoading, isError } = useGetPostsQuery({});
  const [addPost, { isLoading: isAdding }] = useAddPostMutation();

  const handleAddPost = async () => {
    try {
      await addPost({ title }).unwrap();
      setTitle('');
    } catch (error) {
      console.error('Failed to add post:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts?.map((post: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddPost} disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add Post'}
      </button>
    </div>
  );
};

export default Posts;