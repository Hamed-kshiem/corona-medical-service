import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './Entity/staff.entity';
import { Education } from './Entity/education.entity';
import { StaffType } from './Entity/stafftype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Staff, Education, StaffType])],
  providers: [StaffService],
  controllers: [StaffController],
  exports: [StaffService],
})
export class StaffModule {}
