import { User } from './users/user.entity';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBody({ type: User })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }
}
