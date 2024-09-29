import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config: DataSourceOptions = {
  type: 'postgres',
  namingStrategy: new SnakeNamingStrategy(),
  host: '0.0.0.0',
  port: 5432,
  database: 'vacation_rental_property',
  username: 'postgres',
  password: 'postgres',
  entities: ['src/modules/**/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts']
};

export default new DataSource(config);
