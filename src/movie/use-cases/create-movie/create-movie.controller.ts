import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from 'src/movie/dtos/create-movie.dto';
import { CreateMovieService } from './create-movie.service';

@Controller('create-movie')
export class CreateMovieController {
  constructor(private readonly createMovieService: CreateMovieService) {}

  @Post()
  @ApiTags('movie')
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.createMovieService.handle(createMovieDto);
  }
}
