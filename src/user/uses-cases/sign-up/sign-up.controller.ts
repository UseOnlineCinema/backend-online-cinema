import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { Prisma } from '@prisma/client';
import { UserDto } from 'src/user/dtos/user.dto';

@Controller('signup')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  async signUp(
    @Body() signUpUserDto: Prisma.UserCreateInput,
  ): Promise<UserDto> {
    return this.signUpService.handle(signUpUserDto);
  }
}
