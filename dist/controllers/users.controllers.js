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
exports.deleteUserController = exports.updateUserController = exports.retrieveUserController = exports.createUserController = void 0;
const createUserServices_1 = require("../services/Users/createUserServices");
const retrieveUserServices_1 = require("../services/Users/retrieveUserServices");
const deleteUserService_1 = require("../services/Users/deleteUserService");
const updateUserServices_1 = require("../services/Users/updateUserServices");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const newUser = yield (0, createUserServices_1.createUserServices)(userData);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const retrieveUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const user = yield (0, retrieveUserServices_1.retrieveUserServices)(userId);
    return res.status(200).json(user);
});
exports.retrieveUserController = retrieveUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const userId = parseInt(req.params.id);
    const updateUser = yield (0, updateUserServices_1.updateUserServices)(userData, userId);
    return res.status(200).json(updateUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    yield (0, deleteUserService_1.deleteUserServices)(userId);
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
