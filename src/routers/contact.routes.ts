import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controllers";

export const ContactRouter: Router = Router();

ContactRouter.post("", createContactController);
ContactRouter.get("", listContactController);
ContactRouter.patch("", updateContactController);
ContactRouter.delete("", deleteContactController);
