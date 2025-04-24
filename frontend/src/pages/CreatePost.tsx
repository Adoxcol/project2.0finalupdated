import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '@/components/DataTable';
import DownloadButtons from '@/components/DownloadButtons';

const PostsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/posts?page=1&limit=10');
        const { posts } = response.data;
        setData(posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <DataTable data={data} />
      <DownloadButtons data={data} />
    </div>
  );
};

export default PostsPage;