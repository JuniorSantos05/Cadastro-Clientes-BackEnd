"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaResponse = exports.userSchemaUpdateRequest = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string(),
    password: zod_1.z.string(),
    createdAt: zod_1.z.string(),
});
exports.userSchemaRequest = exports.userSchema.omit({
    createdAt: true,
    id: true,
});
exports.userSchemaUpdateRequest = exports.userSchemaRequest.partial();
exports.userSchemaResponse = exports.userSchema.omit({
    password: true,
});
