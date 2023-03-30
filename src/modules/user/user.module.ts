import { Module } from '@nestjs/common';
import { SignUpService } from './use-cases/sign-up/sign-up.service';
import { SignUpController } from './use-cases/sign-up/sign-up.controller';
import { SignInService } from './use-cases/sign-in/sign-in.service';
import { SignInController } from './use-cases/sign-in/sign-in.controller';
import { AuthModule } from 'src/modules/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './database/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User]), AuthModule],
  providers: [SignUpService, SignInService],
  controllers: [SignUpController, SignInController],
  exports: [SequelizeModule],
})
export class UserModule {}
