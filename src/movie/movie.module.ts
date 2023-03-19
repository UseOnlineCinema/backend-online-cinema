import { Module } from '@nestjs/common';
import { CreateMovieService } from './use-cases/create-movie/create-movie.service';
import { CreateMovieController } from './use-cases/create-movie/create-movie.controller';
import { ListMovieService } from './use-cases/list-movie/list-movie.service';
import { ListMovieController } from './use-cases/list-movie/list-movie.controller';
import { UpdateMovieService } from './use-cases/update-movie/update-movie.service';
import { UpdateMovieController } from './use-cases/update-movie/update-movie.controller';
import { DeleteMovieService } from './use-cases/delete-movie/delete-movie.service';
import { DeleteMovieController } from './use-cases/delete-movie/delete-movie.controller';

@Module({
  providers: [
    CreateMovieService,
    ListMovieService,
    UpdateMovieService,
    DeleteMovieService,
  ],
  controllers: [
    CreateMovieController,
    ListMovieController,
    UpdateMovieController,
    DeleteMovieController,
  ],
})
export class MovieModule {}
