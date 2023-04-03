import { Injectable } from '@nestjs/common';
import { Movie } from '../../database/movie.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovieDto } from '@modules/movie/dtos/create-movie/create-movie.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateMovieService {
  constructor(
    @InjectModel(Movie)
    private readonly movieModel: typeof Movie,
  ) {}

  async handle(createMovieDto: CreateMovieDto): Promise<Movie> {
    const { cast, duration, name, synopsis, fileKey } = createMovieDto;

    const movie = await this.movieModel.create({
      id: randomUUID(),
      cast,
      duration,
      name,
      synopsis,
      url: this.getUrlMovie(fileKey),
    });

    return movie;
  }

  private getUrlMovie(key: string): string {
    const region = process.env.REGION;
    const bucket = process.env.BUCKET;

    return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
  }
}
