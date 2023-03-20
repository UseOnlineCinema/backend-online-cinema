import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from 'src/movie/dtos/create-movie.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateMovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(createMovieDto: CreateMovieDto): Promise<Movie> {
    const { cast, duration, name, synopsis, url } = createMovieDto;
    const movie = await this.prismaService.movie.create({
      data: {
        id: randomUUID(),
        cast,
        duration,
        name,
        synopsis,
        url,
      },
    });

    return movie;
  }
}
