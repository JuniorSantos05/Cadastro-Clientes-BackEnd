"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRequestSchema = void 0;
const zod_1 = require("zod");
exports.loginRequestSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
