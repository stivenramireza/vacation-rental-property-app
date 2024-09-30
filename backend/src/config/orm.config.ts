import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config: DataSourceOptions = {
  type: 'postgres',
  namingStrategy: new SnakeNamingStrategy(),
  host: 'postgres-db',
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: ['src/modules/**/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts']
};

export default new DataSource(config);
