"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jwtUtils_1 = require("../utils/jwtUtils");
const authenticate = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        // If no token is provided, send an error response and stop further execution
        res.status(401).json({ error: 'Unauthorized: Missing token' });
        return; // Ensure we don't proceed further
    }
    const decoded = (0, jwtUtils_1.verifyToken)(token);
    if (!decoded) {
        // If the token is invalid, send an error response and stop further execution
        res.status(401).json({ error: 'Unauthorized: Invalid token' });
        return; // Ensure we don't proceed further
    }
    // Attach the userId to the request body for use in subsequent middleware/routes
    req.body.userId = decoded.userId;
    // Call next() to pass control to the next middleware/route handler
    next();
};
exports.authenticate = authenticate;
