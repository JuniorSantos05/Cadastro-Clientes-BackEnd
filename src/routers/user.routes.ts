import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";

export const UserRouter: Router = Router();

UserRouter.post("", createUserController);
UserRouter.get("", listUserController);
UserRouter.patch("", updateUserController);
UserRouter.delete("", deleteUserController);
