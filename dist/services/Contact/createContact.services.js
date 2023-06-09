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
exports.createContactServices = void 0;
const contact_entity_1 = require("../../entities/contact.entity");
const data_source_1 = require("../../data-source");
const user_entity_1 = require("../../entities/user.entity");
const error_1 = require("../../error");
const contacts_schemas_1 = require("../../schemas/contacts.schemas");
const createContactServices = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contact_entity_1.Contact);
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw new error_1.AppError("User not found", 404);
    }
    const newContact = yield contactRepository.create(Object.assign(Object.assign({}, payload), { user }));
    yield contactRepository.save(newContact);
    return contacts_schemas_1.contactSchema.parse(newContact);
});
exports.createContactServices = createContactServices;
