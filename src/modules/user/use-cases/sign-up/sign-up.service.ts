import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { genSaltSync, hash } from 'bcrypt';
import { UserDto } from '@modules/user/dtos/user.dto';
import * as crypto from 'crypto';
import { SignUpUserDto } from '../../dtos/sign-up/sign-up-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '@modules/user/database/user.model';
import { Op } from 'sequelize';

@Injectable()
export class SignUpService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

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

    const foundUser = await this.userModel.findOne({
      where: {
        [Op.or]: [
          { email: signUpUserDto.email },
          { username: signUpUserDto.username },
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

    await this.userModel.create(user);

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  }
}
