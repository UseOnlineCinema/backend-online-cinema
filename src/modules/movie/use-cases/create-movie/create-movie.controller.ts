import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Movie } from '@modules/movie/database/movie.model';
import { AdminAuthGuard } from 'src/modules/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { CreateMovieDto } from 'src/modules/movie/dtos/create-movie.dto';
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
