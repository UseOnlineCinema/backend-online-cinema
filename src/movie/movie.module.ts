import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieService } from './use-cases/create-movie/create-movie.service';
import { CreateMovieController } from './use-cases/create-movie/create-movie.controller';

@Module({
  providers: [CreateMovieService, PrismaService],
  controllers: [CreateMovieController],
})
export class MovieModule {}
