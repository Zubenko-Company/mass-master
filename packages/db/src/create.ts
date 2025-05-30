import type { DataSourceOptions } from "typeorm";
import pg from "pg";
import { DataSource } from "typeorm";

import { Stack } from "./entities/stack.js";
import { User } from "./entities/user.js";

export const tryCatch = <T>(callback: () => T): [T, null] | [null, Error] => {
  try {
    return [callback(), null];
  } catch (err) {
    return [null, err as Error];
  }
};

export const tryCatchAsync = async <T>(
  callback: (() => Promise<T>) | Promise<T>,
): Promise<[T, null] | [null, Error]> => {
  try {
    return callback instanceof Promise
      ? [await callback, null]
      : [await callback(), null];
  } catch (err) {
    return [null, err as Error];
  }
};

pg.types.setTypeParser(pg.types.builtins.INT8, function (val: unknown) {
  return Number(val);
});

const defaultDatabaseConfig = {
  type: "postgres",
  database: "massmaster",
  synchronize: true,
  logging: false,
  entities: [User, Stack],
  migrations: [],
  subscribers: [],
} satisfies Partial<DataSourceOptions>;

interface CreateDatabaseOptions {
  host: string;
  username: string;
  password: string;
  port: number;
}

export const createDatabaseConnection = async (
  options: CreateDatabaseOptions,
) => {
  const client = new pg.Client({ ...options, user: options.username });
  await client.connect();

  const [, err] = await tryCatchAsync(() =>
    client.query("CREATE DATABASE massmaster"),
  );

  if (err?.message.includes("already exists")) {
    console.log('База "MassMaster" уже создана');
  } else if (err) {
    throw new Error("Ошибка при создании базы данных", { cause: err });
  }

  const sourceOptions = {
    ...options,
    ...defaultDatabaseConfig,
  };

  const AppDataSource = new DataSource(sourceOptions);
  await AppDataSource.initialize();

  return {
    User: User,
    Stack: Stack,
  };
};
