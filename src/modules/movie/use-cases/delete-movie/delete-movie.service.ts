import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteMovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async delete(id: string) {
    const movie = await this.prismaService.movie.findFirst({
      where: { id },
    });

    if (!movie) throw new NotFoundException(`Movie: ${id} not found!`);

    return this.prismaService.movie.delete({ where: { id } });
  }
}
