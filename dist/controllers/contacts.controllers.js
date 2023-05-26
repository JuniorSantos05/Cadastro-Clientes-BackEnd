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
exports.retrieveContactController = exports.deleteContactController = exports.updateContactController = exports.listContactController = exports.createContactController = void 0;
const createContact_services_1 = require("../services/Contact/createContact.services");
const listContacts_services_1 = require("../services/Contact/listContacts.services");
const deleteContact_services_1 = require("../services/Contact/deleteContact.services");
const updateContact_services_1 = require("../services/Contact/updateContact.services");
const retrieveContact_services_1 = require("../services/Contact/retrieveContact.services");
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const userId = parseInt(res.locals.userId);
    const newContact = yield (0, createContact_services_1.createContactServices)(contactData, userId);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const listContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(res.locals.userId);
    const contacts = yield (0, listContacts_services_1.listContactsServices)(userId);
    return res.status(200).json(contacts);
});
exports.listContactController = listContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = parseInt(req.params.id);
    const updateData = req.body;
    const updatedContact = yield (0, updateContact_services_1.updateContactServices)(updateData, contactId);
    return res.status(200).json(updatedContact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = parseInt(req.params.id);
    yield (0, deleteContact_services_1.deleteContactServices)(contactId);
    return res.status(204).send();
});
exports.deleteContactController = deleteContactController;
const retrieveContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = parseInt(req.params.id);
    const contact = yield (0, retrieveContact_services_1.retrieveContactServices)(contactId);
    return res.status(200).json(contact);
});
exports.retrieveContactController = retrieveContactController;
