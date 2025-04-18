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
exports.addTagToPostService = exports.getPostsByAuthorService = exports.createPostService = void 0;
const postRepository_1 = require("../repositories/postRepository");
const createPostService = (title, content, authorId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, postRepository_1.createPost)(title, content, authorId);
});
exports.createPostService = createPostService;
const getPostsByAuthorService = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, postRepository_1.getPostsByAuthor)(authorId);
});
exports.getPostsByAuthorService = getPostsByAuthorService;
const addTagToPostService = (postId, tagName) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, postRepository_1.addTagToPost)(postId, tagName);
});
exports.addTagToPostService = addTagToPostService;
