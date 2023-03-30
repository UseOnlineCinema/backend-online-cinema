import { Injectable } from '@nestjs/common';
import { MovieFilter } from './filters/movie.filter';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from '@modules/movie/database/movie.model';

@Injectable()
export class ListMovieService {
  constructor(
    @InjectModel(Movie)
    private readonly movieModel: typeof Movie,
  ) {}

  async handle(filter: MovieFilter): Promise<Movie[]> {
    let filters: { name?: string; cast?: { contains: string } };

    if (filter?.name) {
      filters = { name: filter.name };
    }
    if (filter?.cast) {
      filters = {
        ...filters,
        cast: {
          contains: filter.cast,
        },
      };
    }

    if (filters?.cast?.contains || filters?.name) {
      return this.movieModel.findAll({
        where: {
          ...filters,
        },
      });
    }

    return this.movieModel.findAll();
  }
}
