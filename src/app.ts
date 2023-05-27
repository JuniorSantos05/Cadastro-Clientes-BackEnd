import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { mainRoutes } from "./routers";
import { handleErrors } from "./middlewares/handleErrors.middlewares";
import cors from "cors"

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use(mainRoutes);
app.use(handleErrors);

export default app;
