import express from 'express';
import { authenticate } from '../middleware/auth';
import prisma from 'src/prisma';


const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  const group = await prisma.group.create({
    data: { name: req.body.name }
  });
  res.json(group);
});

router.post('/:groupId/join', authenticate, async (req, res) => {
  await prisma.group.update({ 
    where: { id: Number(req.params.groupId) },
    data: { users: { connect: { id: (req as any).user.userId } } }
  });
  res.json({ message: 'Joined group' });
});

export default router;