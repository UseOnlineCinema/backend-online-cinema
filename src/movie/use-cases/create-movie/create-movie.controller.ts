import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Movie } from '@prisma/client';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMovieDto } from 'src/movie/dtos/create-movie.dto';
import { CreateMovieService } from './create-movie.service';

@Controller('movie')
export class CreateMovieController {
  constructor(private readonly createMovieService: CreateMovieService) {}

  @Post('create-movie')
  @ApiTags('movie')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.createMovieService.handle(createMovieDto);
  }
}
