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
const user_entity_1 = require("../entities/user.entity");
const data_source_1 = require("../data-source");
const error_1 = require("../error");
const contact_entity_1 = require("../entities/contact.entity");
const email = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const contactRepository = data_source_1.AppDataSource.getRepository(contact_entity_1.Contact);
    const findUserByEmail = yield userRepository.findOneBy({
        email: req.body.email,
    });
    const findContactEmail = yield contactRepository.findOneBy({
        email: req.body.email,
    });
    if (findUserByEmail || findContactEmail) {
        throw new error_1.AppError("Email already exists", 409);
    }
    return next();
});
const isUserOrOwner = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const paramsId = parseInt(req.params.id);
    const userId = parseInt(res.locals.userId);
    const user = yield userRepository.findOneBy({ id: paramsId });
    if (!user) {
        throw new error_1.AppError("User not found", 404);
    }
    if (userId !== paramsId) {
        throw new error_1.AppError("Insufficient permission", 403);
    }
    ;
    return next();
});
const isContactOrOwner = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contact_entity_1.Contact);
    const contactId = parseInt(req.params.id);
    const userId = parseInt(res.locals.userId);
    const contact = yield contactRepository.findOne({
        where: { id: contactId }, relations: { user: true }
    });
    if (!contact) {
        throw new error_1.AppError("Contact not found", 404);
    }
    ;
    if (userId !== contact.user.id) {
        throw new error_1.AppError("Insufficient permission", 403);
    }
    ;
    return next();
});
exports.default = { email, isUserOrOwner, isContactOrOwner };
