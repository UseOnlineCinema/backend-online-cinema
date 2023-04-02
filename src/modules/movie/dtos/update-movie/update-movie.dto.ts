import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMovieDto {
  @ApiPropertyOptional({
    example: 'The Matrix',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiPropertyOptional({
    example: `The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in the Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano, and depicts a dystopian future in which humanity is unknowingly trapped inside the Matrix, a simulated reality that intelligent machines have created to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix`,
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  synopsis?: string;

  @ApiPropertyOptional({
    example:
      'Keanu Reeves, Carrie-Anne Moss, Laurence Fishburne, Hugo Weaving, Joe Pantoliano, Marcus Chong...',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  cast?: string;

  @ApiPropertyOptional({
    example: 9780,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  duration?: number;

  @ApiPropertyOptional({
    description: 'The url of the movie',
    example: 'https://www.youtube.com/watch?v=2gliGzb2_1I',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  url?: string;
}
