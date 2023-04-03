import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMovieDto } from '../../dtos/update-movie/update-movie.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from '../../database/movie.model';

@Injectable()
export class UpdateMovieService {
  constructor(
    @InjectModel(Movie)
    private readonly movieModel: typeof Movie,
  ) {}

  async handle(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const foundMovie = await this.movieModel.findByPk(id);

    if (!foundMovie) {
      throw new NotFoundException('No movie with that id was found');
    }

    const { fileKey, ...upadteObject }: UpdateMovieDto & { url?: string } =
      updateMovieDto;

    if (fileKey) {
      upadteObject.url = this.getUrlMovie(fileKey);
    }

    const result = await this.movieModel.update(upadteObject, {
      where: { id },
      returning: true,
    });

    return result[1][0];
  }

  private getUrlMovie(key: string): string {
    const region = process.env.REGION;
    const bucket = process.env.BUCKET;

    return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
  }
}
