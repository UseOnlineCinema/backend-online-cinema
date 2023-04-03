import { Module } from '@nestjs/common';
import { GetSignedUrlGateway } from './aws/get-signed-url';

@Module({
  providers: [GetSignedUrlGateway],
  exports: [GetSignedUrlGateway],
})
export class GatewayModule {}
