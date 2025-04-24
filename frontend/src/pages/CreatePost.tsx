import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '@/components/DataTable';
import DownloadButtons from '@/components/DownloadButtons';
import { Spinner, Box, Text } from '@chakra-ui/react';

const PostsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/posts?page=1&limit=10');
        const { posts } = response.data;
        setData(posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Posts</Text>
      
      
      <DataTable data={data} />

     
      {loading && (
        <Box textAlign="center" mt={4}>
          <Spinner size="lg" color="green.500" />
        </Box>
      )}

     
      {!loading && <DownloadButtons data={data} />}
    </Box>
  );
};

export default PostsPage;
