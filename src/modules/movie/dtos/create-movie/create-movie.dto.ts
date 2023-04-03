import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    description: "the movie's name",
    example: 'The Matrix',
    required: true,
  })
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "the movie's synopsis",
    example: `The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in the Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano, and depicts a dystopian future in which humanity is unknowingly trapped inside the Matrix, a simulated reality that intelligent machines have created to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix`,
    required: true,
  })
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  synopsis: string;

  @ApiProperty({
    description: "the movie's cast",
    example:
      'Keanu Reeves, Carrie-Anne Moss, Laurence Fishburne, Hugo Weaving, Joe Pantoliano, Marcus Chong...',
    required: true,
  })
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  cast: string;

  @ApiProperty({
    description: "the movie's time duration",
    example: 9780,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    description: "the movie's filekey",
    example: 'f3b0c0a0-0c0a-4b0c-8c0a-0c0a0c0a0c0a',
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  fileKey: string;
}
