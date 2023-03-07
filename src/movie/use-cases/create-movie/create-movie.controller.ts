import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
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
  @ApiHeader({
    name: 'Authorization',
  })
  async create(
    @Body() createMovieDto: CreateMovieDto,
    @Request() req,
  ): Promise<Movie> {
    console.log('req.user :>> ', req.user);
    return this.createMovieService.handle(createMovieDto);
  }
}
