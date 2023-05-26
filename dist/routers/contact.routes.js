"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRouter = void 0;
const express_1 = require("express");
const contacts_schemas_1 = require("../schemas/contacts.schemas");
const validated_middleware_1 = __importDefault(require("../middlewares/validated.middleware"));
const verify_middleware_1 = __importDefault(require("../middlewares/verify.middleware"));
const contacts_controllers_1 = require("../controllers/contacts.controllers");
exports.ContactRouter = (0, express_1.Router)();
exports.ContactRouter.use(validated_middleware_1.default.token);
exports.ContactRouter.post("", validated_middleware_1.default.body(contacts_schemas_1.contactSchemaRequest), verify_middleware_1.default.email, contacts_controllers_1.createContactController);
exports.ContactRouter.get("", contacts_controllers_1.listContactController);
exports.ContactRouter.get("/:id", verify_middleware_1.default.isContactOrOwner, contacts_controllers_1.retrieveContactController);
exports.ContactRouter.patch("/:id", verify_middleware_1.default.isContactOrOwner, contacts_controllers_1.updateContactController);
exports.ContactRouter.delete("/:id", verify_middleware_1.default.isContactOrOwner, contacts_controllers_1.deleteContactController);
