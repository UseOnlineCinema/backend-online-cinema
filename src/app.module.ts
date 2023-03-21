import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [UserModule, AuthModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
