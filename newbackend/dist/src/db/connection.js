"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("../data-source");
let db = {
    connect: data_source_1.AppDataSource.initialize(),
};
exports.default = db;
