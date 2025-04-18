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
exports.addTagToPostController = exports.getPostsByAuthorController = exports.createPostController = void 0;
const postService_1 = require("../services/postService");
const createPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const authorId = req.body.userId; // Injected by auth middleware
        const post = yield (0, postService_1.createPostService)(title, content, authorId);
        res.status(201).json(post);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.createPostController = createPostController;
const getPostsByAuthorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorId = req.body.userId; // Injected by auth middleware
        const posts = yield (0, postService_1.getPostsByAuthorService)(authorId);
        res.status(200).json(posts);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.getPostsByAuthorController = getPostsByAuthorController;
const addTagToPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { postId, tagName } = req.body;
        const updatedPost = yield (0, postService_1.addTagToPostService)(postId, tagName);
        res.status(200).json(updatedPost);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.addTagToPostController = addTagToPostController;
