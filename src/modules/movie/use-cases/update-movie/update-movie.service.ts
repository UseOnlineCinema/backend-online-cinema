import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Injectable()
export class UpdateMovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const foundMovie = await this.prismaService.movie.findFirst({
      where: {
        id,
      },
    });

    if (!foundMovie) {
      throw new NotFoundException('No movie with that id was found');
    }

    return this.prismaService.movie.update({
      where: {
        id,
      },
      data: updateMovieDto,
    });
  }
}
