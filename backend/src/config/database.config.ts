import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import {
  AppConfig,
  DatabaseConfig,
  Environment
} from './interfaces/config.interface';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  private readonly logger: Logger;

  constructor(private readonly configService: ConfigService) {
    this.logger = new Logger('TypeOrmConfigService');
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { host, port, name, username, password } =
      this.configService.get<DatabaseConfig>('database');
    const { environment } = this.configService.get<AppConfig>('app');

    const sslEnabled = [Environment.PRODUCTION, Environment.STAGING].includes(
      environment
    );

    return {
      type: 'postgres',
      host,
      port,
      database: name,
      username,
      password,
      autoLoadEntities: true,
      synchronize: environment === Environment.DEVELOPMENT,
      ssl: sslEnabled,
      extra: {
        ssl: sslEnabled
          ? {
              rejectUnauthorized: false
            }
          : null
      }
    };
  }
}
