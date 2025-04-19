import express from 'express';
import cors from 'cors';
import prisma from './prisma';
import router from './routes';

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api', router);


export default app;


if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  
  process.on('SIGINT', async () => {
    await prisma.$disconnect();
    server.close(() => {
      console.log('Server closed');
      process.exit();
    });
  });
}