import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config, { ConfigSchema } from '@/config/config';
import { TypeOrmConfigService } from '@/config';
import { PropertyModule, BookingModule } from '@/modules';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: ConfigSchema
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    PropertyModule,
    BookingModule
  ],
  exports: []
})
export class AppModule {}
