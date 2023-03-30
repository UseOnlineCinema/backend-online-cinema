import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInUserDto } from '../../dtos/sign-in/sign-in-user.dto';
import { SignInService } from './sign-in.service';

@Controller('signin')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  @ApiTags('user')
  async signIn(@Body() signInUserDto: SignInUserDto) {
    return this.signInService.handle(signInUserDto);
  }
}
