import { Module } from '@nestjs/common';
import { SignUpService } from './uses-cases/sign-up/sign-up.service';
import { SignUpController } from './uses-cases/sign-up/sign-up.controller';

@Module({
  providers: [SignUpService],
  controllers: [SignUpController],
})
export class UserModule {}
