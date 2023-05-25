import { Router } from "express";
import { createTokenController } from "../controllers/login.controllers";

export const loginRouter: Router = Router();

loginRouter.post("", createTokenController);
