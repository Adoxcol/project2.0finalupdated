import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600 mt-2">{post.content.slice(0, 100)}...</p>
      <Link
        to={`/post/${post.id}`}
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostCard;