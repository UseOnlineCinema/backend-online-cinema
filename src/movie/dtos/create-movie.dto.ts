import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    description: "the movie's name",
    example: 'The Matrix',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "the movie's synopsis",
    example: `The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in the Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano, and depicts a dystopian future in which humanity is unknowingly trapped inside the Matrix, a simulated reality that intelligent machines have created to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  synopsis: string;

  @ApiProperty({
    description: "the movie's cast",
    example:
      'Keanu Reeves, Carrie-Anne Moss, Laurence Fishburne, Hugo Weaving, Joe Pantoliano, Marcus Chong...',
    required: true,
  })
  @IsString()
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
    description: 'The url of the movie',
    example:
      'https://www.youtube.com/watch?v=7G9h-dgmQnY&ab_channel=TheJazzHopCaf%C3%A9',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  url: string;
}
