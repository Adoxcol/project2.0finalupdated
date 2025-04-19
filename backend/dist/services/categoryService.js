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
exports.deleteCategoryService = exports.getCategoryByIdService = exports.getAllCategoriesService = exports.createCategoryService = void 0;
const categoryRepository_1 = require("../repositories/categoryRepository");
const createCategoryService = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, categoryRepository_1.createCategory)(name);
});
exports.createCategoryService = createCategoryService;
const getAllCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, categoryRepository_1.getAllCategories)();
});
exports.getAllCategoriesService = getAllCategoriesService;
const getCategoryByIdService = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, categoryRepository_1.getCategoryById)(categoryId);
    if (!category)
        throw new Error('Category not found');
    return category;
});
exports.getCategoryByIdService = getCategoryByIdService;
const deleteCategoryService = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, categoryRepository_1.getCategoryById)(categoryId);
    if (!category)
        throw new Error('Category not found');
    return yield (0, categoryRepository_1.deleteCategory)(categoryId);
});
exports.deleteCategoryService = deleteCategoryService;
