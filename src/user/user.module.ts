import { Module } from '@nestjs/common';
import { SignUpService } from './use-cases/sign-up/sign-up.service';
import { SignUpController } from './use-cases/sign-up/sign-up.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { SignInService } from './use-cases/sign-in/sign-in.service';
import { SignInController } from './use-cases/sign-in/sign-in.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [SignUpService, PrismaService, SignInService],
  controllers: [SignUpController, SignInController],
  imports: [AuthModule],
})
export class UserModule {}
