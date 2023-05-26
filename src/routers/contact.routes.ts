import { Router } from "express";
import { contactSchemaRequest } from "../schemas/contacts.schemas";
import validated from "../middlewares/validated.middleware";
import verify from "../middlewares/verify.middleware";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controllers";

export const ContactRouter: Router = Router();

ContactRouter.use(validated.token)

ContactRouter.post("", validated.body(contactSchemaRequest), verify.email, createContactController);
ContactRouter.get("", listContactController);
ContactRouter.patch("/:id", verify.isContactOrOwner, updateContactController);
ContactRouter.delete("/:id", verify.isContactOrOwner, deleteContactController);
