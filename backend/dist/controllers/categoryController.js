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
exports.deleteCategoryController = exports.getCategoryByIdController = exports.getAllCategoriesController = exports.createCategoryController = void 0;
const categoryService_1 = require("../services/categoryService");
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const category = yield (0, categoryService_1.createCategoryService)(name);
        res.status(201).json(category);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.createCategoryController = createCategoryController;
const getAllCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, categoryService_1.getAllCategoriesService)();
        res.status(200).json(categories);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.getAllCategoriesController = getAllCategoriesController;
const getCategoryByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const category = yield (0, categoryService_1.getCategoryByIdService)(Number(id));
        res.status(200).json(category);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.getCategoryByIdController = getCategoryByIdController;
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, categoryService_1.deleteCategoryService)(Number(id));
        res.status(204).send();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
});
exports.deleteCategoryController = deleteCategoryController;
