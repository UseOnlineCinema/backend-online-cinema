import { Injectable } from '@nestjs/common';
import { Movie } from '../../database/movie.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovieDto } from '@modules/movie/dtos/create-movie/create-movie.dto';
@Injectable()
export class CreateMovieService {
  constructor(
    @InjectModel(Movie)
    private readonly movieModel: typeof Movie,
  ) {}

  async handle(createMovieDto: CreateMovieDto): Promise<Movie> {
    const { cast, duration, name, synopsis } = createMovieDto;
    const movie = await this.movieModel.create({
      cast,
      duration,
      name,
      synopsis,
    });

    return movie;
  }
}
