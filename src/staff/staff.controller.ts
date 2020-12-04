import { Staff } from './Entity/staff.entity';
import { StaffService } from './staff.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @Post()
  addStaff(@Body() staffobj: Staff) {
    return this.staffService.create(staffobj);
  }
}
