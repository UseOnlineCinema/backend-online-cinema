import { SignedUrlDto } from '@modules/gateway/aws/dtos/signed-url.dto';

export abstract class IGetSignedUrlGateway {
  abstract handle(): Promise<SignedUrlDto>;
}
