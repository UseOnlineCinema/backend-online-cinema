import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: "the user's id",
    example: '59902b33-3bf2-4cf8-ac75-c8a53a6c6e71',
  })
  id: string;

  @ApiProperty({
    description: "the user's username",
    example: 'josvane',
  })
  username: string;

  @ApiProperty({
    description: "the user's email",
    example: 'giovaneaalmeida27@gmail.com',
  })
  email: string;
}
