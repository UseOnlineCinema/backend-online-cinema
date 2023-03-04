import { ApiProperty } from '@nestjs/swagger';

export class SignUpUserDto {
  @ApiProperty({
    description: 'the username',
    example: 'josvane',
    required: true,
  })
  username: string;

  @ApiProperty({
    description: "the user's email",
    example: 'giovaneaalmeida27@gmail.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    description: "the user's password",
    example: '1234',
    required: true,
  })
  password: string;
}
