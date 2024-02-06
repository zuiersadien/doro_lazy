import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './module/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './module/tags/tags.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: '-4bF31Hcf52a1DAAefaDBGF5E5-CEED1',
      host: 'monorail.proxy.rlwy.net',
      port: 39266,
      synchronize: true,
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
