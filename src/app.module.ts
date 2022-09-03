import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { dbUrl } from './environment';

@Module({
  imports: [MongooseModule.forRoot(dbUrl.url), UsersModule, AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
