"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
            headers: req.headers,
        });
        next(); // Proceed to the next middleware if validation passes
    }
    catch (error) {
        res.status(400).json({
            message: 'Validation failed',
            errors: error.errors,
        });
    }
};
exports.validateRequest = validateRequest;
