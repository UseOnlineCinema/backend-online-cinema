import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [UserModule, AuthModule, MovieModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
