import { Router } from "express";
import { userSchemaRequest } from "../schemas/users.schemas";
import validated from "../middlewares/validated.middleware";
import verify from "../middlewares/verify.middleware";
import {
  createUserController,
  deleteUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controllers";

export const UserRouter: Router = Router();

UserRouter.post("", validated.body(userSchemaRequest), verify.email, createUserController);
UserRouter.get("", listUserController);
UserRouter.get("/:id", verify.isUserExist, retrieveUserController);
UserRouter.delete("/:id", validated.token, verify.isUserExist, deleteUserController);
UserRouter.patch("/:id", validated.token, verify.isUserExist, updateUserController);
