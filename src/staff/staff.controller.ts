import { Education } from './Entity/education.entity';
import { Staff } from './Entity/staff.entity';
import { StaffService } from './staff.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { get } from 'http';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('staff')
@ApiBearerAuth()
@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @ApiOkResponse({
    schema: {
      allOf: [
        {
          properties: {
            result: {
              type: 'array',
              items: { $ref: getSchemaPath(Staff) },
            },
          },
        },
      ],
    },
  })
  @ApiNotFoundResponse({ description: 'No Staff found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @ApiCreatedResponse({
    description: 'The Staff record has been successfully created.',
    type: Staff,
  })
  @ApiNotFoundResponse({ description: 'Staff already exisits' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiBody({ type: Staff })
  @Post()
  addStaff(@Body() staffobj: Staff) {
    return this.staffService.create(staffobj);
  }

  @ApiOkResponse({
    description: 'Get Staff by id',
    type: Staff,
  })
  @ApiNotFoundResponse({ description: 'No Staff found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.staffService.findOne(id);
  }

  @ApiCreatedResponse({
    description: 'The Staff record has been successfully updated.',
    type: Staff,
  })
  @ApiNotFoundResponse({ description: 'Staff not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiBody({ type: Staff })
  @Put(':id')
  update(@Param('id') id: number, @Body() staffDto: Staff) {
    return this.staffService.update(id, staffDto);
  }

  @ApiCreatedResponse({
    description: 'The Staff record has been successfully deleted.',
  })
  @ApiNotFoundResponse({ description: 'Staff not found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.staffService.remove(id);
  }

  @Get('type/:id')
  async getType(@Param('id') id: number) {
    const staff: Staff = await this.staffService.findOne(id);
    Logger.log(staff.type);
    return staff.type;
  }
  @Post('education/:id')
  async getEducation(@Param('id') id: number, @Body() eduDto: Education) {
    return this.staffService.addEducation(id, eduDto);
  }
}
