
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore our features and start creating or reading posts today!
        </p>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Link to Login */}
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-center"
        >
          Login
        </Link>

        {/* Link to Register */}
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-center"
        >
          Register
        </Link>

        {/* Link to Profile */}
        <Link
          to="/profile"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-center"
        >
          Profile
        </Link>

        {/* Link to Create Post */}
        <Link
          to="/create-post"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-center"
        >
          Create Post
        </Link>

        {/* Link to Categories */}
        <Link
          to="/categories"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-center"
        >
          Categories
        </Link>
      </div>
    </div>
  );
};

export default Home;