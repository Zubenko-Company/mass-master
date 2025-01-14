import dotenv from "dotenv";
import { findUp } from "find-up";

const dotenvPath = await findUp(".env");
dotenv.config({ path: dotenvPath });

const getErrorEnvMessage = (fieldName: string) =>
  `Вы не установили ${fieldName} поле в .env, выполните команду \`cp .env.dist .env\` и заполните поле ${fieldName}`;

export class Config {
  static get DB_HOST(): string {
    if (!process.env.DB_HOST) {
      throw new Error(getErrorEnvMessage("DB_HOST"));
    }

    return process.env.DB_HOST;
  }

  static get DB_USERNAME(): string {
    if (!process.env.DB_USERNAME) {
      throw new Error(getErrorEnvMessage("DB_USERNAME"));
    }

    return process.env.DB_USERNAME;
  }

  static get DB_PASSWORD(): string {
    if (!process.env.DB_PASSWORD) {
      throw new Error(getErrorEnvMessage("DB_PASSWORD"));
    }

    return process.env.DB_PASSWORD;
  }

  static get DB_PORT(): number {
    if (!process.env.DB_PORT) {
      throw new Error(getErrorEnvMessage("DB_PORT"));
    }

    return Number(process.env.DB_PORT);
  }

  static get JWT_SECRET(): string {
    if (!process.env.JWT_SECRET) {
      throw new Error(getErrorEnvMessage("JWT_SECRET"));
    }

    return process.env.JWT_SECRET;
  }
}
