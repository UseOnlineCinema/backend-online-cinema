import {
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DeleteMovieService } from './delete-movie.service';

@Controller('movie')
export class DeleteMovieController {
  constructor(private readonly service: DeleteMovieService) {}

  @Delete('delete-movie/:id')
  @ApiTags('movie')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async create(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.delete(id);
  }
}
