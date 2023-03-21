import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { genSaltSync, hash } from 'bcrypt';
import { UserDto } from '@modules/user/dtos/user.dto';
import * as crypto from 'crypto';
import { SignUpUserDto } from './dtos/sign-up-user.dto';

@Injectable()
export class SignUpService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(signUpUserDto: SignUpUserDto): Promise<UserDto> {
    if (
      !signUpUserDto.email ||
      !signUpUserDto.username ||
      !signUpUserDto.password
    ) {
      throw new BadRequestException(
        'Please insert username, email and password',
      );
    }

    const foundUser = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: signUpUserDto.email,
          },
          {
            username: signUpUserDto.username,
          },
        ],
      },
    });

    if (foundUser) {
      throw new ConflictException('The username or email is already in use');
    }

    const salt = genSaltSync(8);
    const hashedPassword = await hash(signUpUserDto.password, salt);

    const user = {
      id: crypto.randomUUID(),
      password: hashedPassword,
      email: signUpUserDto.email,
      username: signUpUserDto.username,
    };

    await this.prismaService.user.create({
      data: user,
    });

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  }
}
