"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
const user_entity_1 = require("./entities/user.entity");
const contact_entity_1 = require("./entities/contact.entity");
const _1684927283676_CreateTables_1 = require("./migrations/1684927283676-CreateTables");
const DataSourceConfig = () => {
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
        entities: [user_entity_1.User, contact_entity_1.Contact],
        migrations: [_1684927283676_CreateTables_1.CreateTables1684927283676],
        schema: "public",
    };
};
const AppDataSource = new typeorm_1.DataSource(DataSourceConfig());
exports.AppDataSource = AppDataSource;
