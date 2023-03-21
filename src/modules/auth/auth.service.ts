import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    if (user && (await compare(pass, user.password))) {
      user.password = undefined;

      return user;
    }

    return null;
  }

  async signToken(user: any) {
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }
}
