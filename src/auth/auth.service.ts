import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
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
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async signToken(user: any) {
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    return this.jwtService.sign(payload);
  }
}
