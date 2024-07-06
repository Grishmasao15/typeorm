import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../typeorm/entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "root",
    database: "demo_newproject",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ['dist/typeorm/migrations/1720161613706-token_time.ts'],
    subscribers: [],
})
