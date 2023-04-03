import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { GetSignedUrlGateway } from '@modules/gateway/aws/get-signed-url';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('movie')
export class GetSignedUrlController {
  constructor(private readonly getSignedUrl: GetSignedUrlGateway) {}

  @ApiTags('movie')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/getSignedUrl')
  async get() {
    return this.getSignedUrl.handle();
  }
}
