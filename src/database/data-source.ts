import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "rentalx123",
  database: "rentalx",
  migrations: ["./src/database/migrations/*.ts"],
  entities: [Category]
})