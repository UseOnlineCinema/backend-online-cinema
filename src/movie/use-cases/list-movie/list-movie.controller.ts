import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Movie } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MovieFilter } from './filters/movie.filter';
import { ListMovieService } from './list-movie.service';

@Controller('movie')
export class ListMovieController {
  constructor(private readonly listMovieService: ListMovieService) {}

  @Get('list-movie')
  @ApiTags('movie')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async list(@Query() movieFilter?: MovieFilter): Promise<Movie[]> {
    return this.listMovieService.handle(movieFilter);
  }
}
