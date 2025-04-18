"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTagToPost = exports.getPostsByAuthor = exports.createPost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createPost = (title, content, authorId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.post.create({
        data: { title, content, authorId },
    });
});
exports.createPost = createPost;
const getPostsByAuthor = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.post.findMany({
        where: { authorId },
        include: { tags: true },
    });
});
exports.getPostsByAuthor = getPostsByAuthor;
const addTagToPost = (postId, tagName) => __awaiter(void 0, void 0, void 0, function* () {
    const tag = yield prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName },
    });
    return yield prisma.post.update({
        where: { id: postId },
        data: { tags: { connect: { id: tag.id } } },
    });
});
exports.addTagToPost = addTagToPost;
