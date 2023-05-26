"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsSchemaResponse = exports.contactSchemaUpdate = exports.contactSchemaRequest = exports.contactSchema = void 0;
const zod_1 = require("zod");
exports.contactSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string(),
    createdAt: zod_1.z.string(),
});
exports.contactSchemaRequest = exports.contactSchema.omit({
    id: true,
    user: true,
    createdAt: true,
});
exports.contactSchemaUpdate = exports.contactSchemaRequest.partial();
exports.contactsSchemaResponse = zod_1.z.array(exports.contactSchema);
