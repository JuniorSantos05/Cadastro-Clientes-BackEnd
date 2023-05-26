"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const login_controllers_1 = require("../controllers/login.controllers");
const login_schemas_1 = require("../schemas/login.schemas");
const validated_middleware_1 = __importDefault(require("../middlewares/validated.middleware"));
exports.loginRouter = (0, express_1.Router)();
exports.loginRouter.post("", validated_middleware_1.default.body(login_schemas_1.loginRequestSchema), login_controllers_1.createTokenController);
