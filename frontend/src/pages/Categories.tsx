import { useEffect, useState } from 'react';
import axios from 'axios';

interface Category {
  id: string;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<Category>('/api/categories/create', { name: newCategory });
      setCategories([...categories, response.data]);
      setNewCategory('');
      alert('Category created successfully!');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      <form onSubmit={handleCreateCategory} className="mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="New Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Category
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
