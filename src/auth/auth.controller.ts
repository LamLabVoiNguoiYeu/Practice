import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninUserDto, SignupUserDto } from './dto';
import { Tokens } from './types';
import { GetUserId } from './decorators/get-user-id.decorator';
import { AccessTokenGuard, RefreshTokenGuard } from './guards';
import { GetUser } from './decorators';
import { ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign up' })
  @ApiOkResponse({ status: 200, description: 'Successfully register user!' })
  @ApiForbiddenResponse({ description: 'Credentials incorrect!' })
  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signup(@Body() signupUserDto: SignupUserDto): Promise<Tokens> {
    return this.authService.signup(signupUserDto);
  }

  @ApiOperation({ summary: 'Sign in' })
  @ApiOkResponse({ description: 'Successfully login!' })
  @ApiForbiddenResponse({ description: 'Credentials incorrect!' })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() signinUserDto: SigninUserDto): Promise<Tokens>{
    return this.authService.signin(signinUserDto)
  }

  @ApiOperation({ summary: 'Logout' })
  @ApiOkResponse({ description: 'Successfully logout!' })
  @ApiUnauthorizedResponse({description: 'Unauthorized!'})
  @UseGuards(AccessTokenGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@GetUserId() user_id: string): Promise<boolean> {
    return this.authService.logout(user_id);
  }

  @Public()
  @ApiOperation({ summary: 'Refresh Token' })
  @ApiOkResponse({ description: 'Successfully refresh token!' })
  @HttpCode(HttpStatus.OK)
  @ApiUnauthorizedResponse({ description: 'Unauthorized!' })
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @GetUserId() user_id: string,
    @GetUser('refreshToken') refreshToken:string
  ):Promise<Tokens>{
    return this.authService.refreshToken(user_id, refreshToken)
  }
}
