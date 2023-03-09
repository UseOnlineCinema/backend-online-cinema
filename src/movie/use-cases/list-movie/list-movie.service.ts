import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { MovieFilter } from './filters/movie.filter';

@Injectable()
export class ListMovieService {
  constructor(private readonly prismaService: PrismaService) {}

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
      return this.prismaService.movie.findMany({
        where: {
          OR: {
            ...filters,
          },
        },
      });
    }

    return this.prismaService.movie.findMany();
  }
}
