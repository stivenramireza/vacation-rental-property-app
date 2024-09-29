export enum Environment {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production'
}

export enum ApiVersion {
  V1 = 'v1'
}

export interface AppConfig {
  port: number;
  environment: Environment;
  host: string;
  apiVersion: ApiVersion;
  originCorsUrl: string;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
}

export interface SecretsConfig {
  app: AppConfig;
  database: DatabaseConfig;
}
