import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { createResponse } from 'src/common/utils/response.utils';
import { ApiResponse } from 'src/common/interface/response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body(ValidationPipe) signupDto: SignupDto,
    @Res() res: Response,
  ) {
    const result = await this.authService.signup(
      signupDto.email,
      signupDto.password,
      signupDto.name,
    );

    res.cookie('token', result.access_token, {
      httpOnly: true,
      secure: true,              // Required for HTTPS
      sameSite: 'none',          // Required for cross-site
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(201).json(result);
  }

  @Post('login')
  async login(
    @Body(ValidationPipe) loginDto: LoginDto,
    @Res() res: Response,
  ) {
    const result = await this.authService.login(
      loginDto.email,
      loginDto.password,
    );

    res.cookie('token', result.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: {
        access_token: result.access_token,
      },
    });
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });

    return res.json({
      status: 'success',
      message: 'Logout successful',
      data: null,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req): Promise<ApiResponse<any>> {
    return createResponse('success', 'Profile retrieved', req.user);
  }
}
