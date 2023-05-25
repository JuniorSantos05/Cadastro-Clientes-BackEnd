import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/users.schemas";
import {
  ensureEmailExistsMiddleware,
  ensureUserExistsMiddleware,
} from "../middlewares/verify.middleware";
import {
  createUserController,
  deleteUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controllers";

export const UserRouter: Router = Router();

UserRouter.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  createUserController
);
UserRouter.get("", listUserController);
UserRouter.get("/:id", ensureUserExistsMiddleware, retrieveUserController);
UserRouter.patch(
  "/:id",
  ensureDataIsValidMiddleware(userSchemaUpdateRequest),
  ensureUserExistsMiddleware,
  ensureEmailExistsMiddleware,
  updateUserController
);
UserRouter.delete("/:id", ensureUserExistsMiddleware, deleteUserController);
