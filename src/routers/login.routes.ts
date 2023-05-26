import { Router } from "express";
import { createTokenController } from "../controllers/login.controllers";
import { loginRequestSchema } from "../schemas/login.schemas";
import validated from "../middlewares/validated.middleware";

export const loginRouter: Router = Router();

loginRouter.post("", validated.body(loginRequestSchema), createTokenController);
