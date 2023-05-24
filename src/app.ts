import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { mainRoutes } from "./routers";

const app: Application = express();
app.use(express.json());

app.use(mainRoutes);

export default app;
