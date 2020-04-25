import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig = (): TypeOrmModuleOptions => ({
  type: dbConfig.type,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT) || dbConfig.port,
  username: process.env.DATABASE_USER || dbConfig.username,
  password: process.env.DATABASE_PASSWORD || dbConfig.password,
  database: process.env.DATABASE_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
});
