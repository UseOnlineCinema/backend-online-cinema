import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';
import { IGetSignedUrlGateway } from './interfaces/get-signed-url.interface';

export class GetSignedUrlGateway implements IGetSignedUrlGateway {
  async handle() {
    const bucket = process.env.BUCKET;
    const region = process.env.REGION;
    const signedUrl = await this.createPresignedUrlWithClient({
      bucket,
      region,
      key: randomUUID(),
    });

    return { url: signedUrl };
  }

  private async createPresignedUrlWithClient({
    region,
    bucket,
    key,
  }): Promise<string> {
    const client = new S3Client({ region });
    const command = new PutObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command, {
      expiresIn: (process.env.EXPIRES_URL_SIGNED as unknown as number) || 3600,
    });
  }
}
