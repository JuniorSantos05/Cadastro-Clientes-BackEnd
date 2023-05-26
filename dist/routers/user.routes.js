"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const users_schemas_1 = require("../schemas/users.schemas");
const validated_middleware_1 = __importDefault(require("../middlewares/validated.middleware"));
const verify_middleware_1 = __importDefault(require("../middlewares/verify.middleware"));
const users_controllers_1 = require("../controllers/users.controllers");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.post("", validated_middleware_1.default.body(users_schemas_1.userSchemaRequest), verify_middleware_1.default.email, users_controllers_1.createUserController);
exports.UserRouter.get("/:id", validated_middleware_1.default.token, verify_middleware_1.default.isUserOrOwner, users_controllers_1.retrieveUserController);
exports.UserRouter.delete("/:id", validated_middleware_1.default.token, verify_middleware_1.default.isUserOrOwner, users_controllers_1.deleteUserController);
exports.UserRouter.patch("/:id", validated_middleware_1.default.token, verify_middleware_1.default.isUserOrOwner, users_controllers_1.updateUserController);
