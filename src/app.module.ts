import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
require('dotenv').config();
import { TasksModule } from './tasks/tasks.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
  ],
})
export class AppModule {}
