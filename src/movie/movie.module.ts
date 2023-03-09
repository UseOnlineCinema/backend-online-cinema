import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieService } from './use-cases/create-movie/create-movie.service';
import { CreateMovieController } from './use-cases/create-movie/create-movie.controller';
import { ListMovieService } from './use-cases/list-movie/list-movie.service';
import { ListMovieController } from './use-cases/list-movie/list-movie.controller';

@Module({
  providers: [CreateMovieService, PrismaService, ListMovieService],
  controllers: [CreateMovieController, ListMovieController],
})
export class MovieModule {}
