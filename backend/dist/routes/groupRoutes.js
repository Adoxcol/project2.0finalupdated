var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { authenticate } from '../middleware/auth';
import prisma from '../prisma';
const router = express.Router();
router.post('/', authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield prisma.group.create({
        data: { name: req.body.name }
    });
    res.json(group);
}));
router.post('/:groupId/join', authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.group.update({
        where: { id: Number(req.params.groupId) },
        data: { users: { connect: { id: req.user.userId } } }
    });
    res.json({ message: 'Joined group' });
}));
export default router;
