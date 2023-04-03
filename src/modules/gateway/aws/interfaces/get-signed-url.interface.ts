import { SignedUrlDto } from '@modules/gateway/dtos/signed-url.dto';

export abstract class IGetSignedUrlGateway {
  abstract handle(): Promise<SignedUrlDto>;
}
