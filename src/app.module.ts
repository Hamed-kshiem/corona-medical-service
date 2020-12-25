import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { StaffController } from './staff/staff.controller';
import { StaffService } from './staff/staff.service';

import { StaffModule } from './staff/staff.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StaffModule, AuthModule, UsersModule],
  controllers: [AppController, StaffController],
  providers: [AppService],
})
export class AppModule {}
