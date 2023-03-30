import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '@modules/auth/admin-auth.guard';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { UpdateMovieService } from './update-movie.service';

@Controller('movie')
export class UpdateMovieController {
  constructor(private readonly updateMovieService: UpdateMovieService) {}

  @Put('/update-movie/:id')
  @ApiTags('movie')
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    description: "the movie's id",
    type: 'string',
  })
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.updateMovieService.handle(id, updateMovieDto);
  }
}
