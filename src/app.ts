import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { mainRoutes } from "./routers";
import { handleErrors } from "./middlewares/handleErrors.middlewares";

const app: Application = express();
app.use(express.json());

app.use(mainRoutes);
app.use(handleErrors);

export default app;
