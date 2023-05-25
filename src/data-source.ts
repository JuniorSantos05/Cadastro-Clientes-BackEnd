import { DataSource, DataSourceOptions } from "typeorm";
import path from "node:path";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { CreateTables1684927283676 } from "./migrations/1684927283676-CreateTables";

const DataSourceConfig = (): DataSourceOptions => {
  //const entitiesPath = path.join(__dirname, "./entities/**.{js,ts}");
  //const migrationsPath = path.join(__dirname, "./migrations/**.{js,ts}");

  if (!process.env.DATABASE_URL) {
    throw new Error("Env var DABATASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [User, Contact],
    migrations: [CreateTables1684927283676],
    schema: "public",
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
