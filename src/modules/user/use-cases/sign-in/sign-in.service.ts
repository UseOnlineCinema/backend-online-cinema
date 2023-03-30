import { BadRequestException, Injectable } from '@nestjs/common';
import { SignInUserDto } from '../../dtos/sign-in/sign-in-user.dto';
import { AuthService } from '@modules/auth/auth.service';

@Injectable()
export class SignInService {
  constructor(private readonly authService: AuthService) {}

  async handle(signInUserDto: SignInUserDto) {
    const foundUser = await this.authService.validateUser(
      signInUserDto.email,
      signInUserDto.password,
    );

    if (!foundUser) {
      throw new BadRequestException("User's email or password is wrong");
    }

    return this.authService.signToken(foundUser);
  }
}
