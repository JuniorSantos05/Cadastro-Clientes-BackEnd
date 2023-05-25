import { Router } from "express";
import { loginRouter } from "./login.routes";
import { UserRouter } from "./user.routes";
import { ContactRouter } from "./contact.routes";

export const mainRoutes: Router = Router();

mainRoutes.use("/login", loginRouter);
mainRoutes.use("/users", UserRouter);
mainRoutes.use("/contacts", ContactRouter);
