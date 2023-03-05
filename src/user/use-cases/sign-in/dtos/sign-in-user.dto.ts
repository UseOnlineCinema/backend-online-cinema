import { ApiProperty } from '@nestjs/swagger';

export class SignInUserDto {
  @ApiProperty({
    description: "the user's email",
    example: 'test@email.com',
    type: String,
    required: true,
  })
  email: string;

  @ApiProperty({
    description: "the user's password",
    example: '1234',
    type: String,
    required: true,
  })
  password: string;
}
