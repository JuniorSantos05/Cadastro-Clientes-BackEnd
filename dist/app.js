"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const handleErrors_middlewares_1 = require("./middlewares/handleErrors.middlewares");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routers_1.mainRoutes);
app.use(handleErrors_middlewares_1.handleErrors);
exports.default = app;
