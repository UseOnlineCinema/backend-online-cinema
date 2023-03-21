import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { MovieModule } from './modules/movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AuthModule, MovieModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
