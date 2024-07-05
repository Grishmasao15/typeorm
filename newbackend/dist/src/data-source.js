"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../typeorm/entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "root",
    database: "demo_newproject",
    synchronize: false,
    logging: false,
    entities: [User_1.User],
    migrations: ['dist/typeorm/migrations/1720161613706-token_time.ts'],
    subscribers: [],
});
