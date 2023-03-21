import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieService } from './use-cases/create-movie/create-movie.service';
import { CreateMovieController } from './use-cases/create-movie/create-movie.controller';
import { UpdateMovieService } from './use-cases/update-movie/update-movie.service';
import { UpdateMovieController } from './use-cases/update-movie/update-movie.controller';

@Module({
  providers: [CreateMovieService, PrismaService, UpdateMovieService],
  controllers: [CreateMovieController, UpdateMovieController],
})
export class MovieModule {}
