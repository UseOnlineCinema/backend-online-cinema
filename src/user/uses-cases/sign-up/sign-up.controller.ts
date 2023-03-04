import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { UserDto } from 'src/user/dtos/user.dto';
import { ApiOperation, ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { SignUpUserDto } from './dtos/sign-up-user.dto';

@Controller('signup')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  @ApiTags('user')
  @ApiOperation({
    summary: 'Signs up a user',
    description: 'Create a user in the database with the given data',
  })
  @ApiBody({
    required: true,
    type: SignUpUserDto,
    description: 'The form sent by the user to create a new record',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: UserDto,
  })
  async signUp(@Body() signUpUserDto: SignUpUserDto): Promise<UserDto> {
    return this.signUpService.handle(signUpUserDto);
  }
}
