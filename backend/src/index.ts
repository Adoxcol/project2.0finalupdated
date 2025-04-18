import express from 'express';
import authRoutes from './routes/authRoutes';
import { authenticate } from './middleware/auth';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected data' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});