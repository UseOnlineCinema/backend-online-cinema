import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MovieFilter {
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The name of the movie',
    example: 'The Matrix',
  })
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'The cast of the movie',
    example: 'Keanu Reeves',
  })
  cast?: string;
}
