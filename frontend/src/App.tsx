import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import Categories from './pages/Categories';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;