import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '@modules/movie/database/movie.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DeleteMovieService {
  constructor(
    @InjectModel(Movie)
    private readonly movieModel: typeof Movie,
  ) {}

  async delete(id: string) {
    const movie = await this.movieModel.findOne({
      where: { id },
    });

    if (!movie) throw new NotFoundException(`Movie: ${id} not found!`);

    return this.movieModel.destroy({
      where: { id },
    });
  }
}
