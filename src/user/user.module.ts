import { Module } from '@nestjs/common';
import { SignUpService } from './uses-cases/sign-up/sign-up.service';
import { SignUpController } from './uses-cases/sign-up/sign-up.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SignUpService, PrismaService],
  controllers: [SignUpController],
})
export class UserModule {}
