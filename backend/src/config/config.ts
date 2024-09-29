import * as J from 'joi';

import { ApiVersion, Environment, SecretsConfig } from '@/config/interfaces/config.interface';

export const ConfigSchema = J.object({
  PORT: J.number().required(),
  ENV: J.string()
    .valid(...Object.values(Environment))
    .required(),
  HOST: J.string().required(),
  API_VERSION: J.string()
    .valid(...Object.values(ApiVersion))
    .required(),
  DB_HOST: J.string().required(),
  DB_PORT: J.number().required(),
  DB_NAME: J.string().required(),
  DB_USER: J.string().required(),
  DB_PASSWORD: J.string().required()
});

export default (): SecretsConfig => ({
  app: {
    port: +process.env.PORT,
    environment: process.env.ENV as Environment,
    host: process.env.HOST,
    apiVersion: process.env.API_VERSION as ApiVersion
  },
  database: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
});
