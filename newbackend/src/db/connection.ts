
import "reflect-metadata";
import { AppDataSource } from "../config/data-source";

let db = {
  connect: AppDataSource.initialize(),
};

export default db;