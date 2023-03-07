import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [UserModule, AuthModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
