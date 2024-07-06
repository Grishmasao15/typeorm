
import "reflect-metadata";
import { AppDataSource } from "../config/ormconfig";

let db = {
  connect: AppDataSource.initialize(),
};

export default db;