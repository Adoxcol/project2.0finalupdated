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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = exports.createPost = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const createPost = (title, content, authorId, tagIds, categoryIds) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.post.create({
        data: {
            title,
            content,
            authorId,
            tags: { connect: tagIds.map(id => ({ id })) },
            categories: { connect: categoryIds.map(id => ({ id })) }
        },
        include: { tags: true, categories: true }
    });
});
exports.createPost = createPost;
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.post.findMany({
        include: { author: true, tags: true, categories: true }
    });
});
exports.getPosts = getPosts;
