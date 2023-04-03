import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { IGetSignedUrlGateway } from './interfaces/get-signed-url.interface';

export class GetSignedUrlGateway implements IGetSignedUrlGateway {
  async handle() {
    const bucket = process.env.BUCKET;
    const region = process.env.REGION;
    const awsKey = process.env.AWS_KEY;
    const signedUrl = await this.createPresignedUrlWithClient({
      bucket,
      region,
      key: awsKey,
    });

    return signedUrl;
  }

  private async createPresignedUrlWithClient({ region, bucket, key }) {
    const client = new S3Client({ region });
    const command = new PutObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command, { expiresIn: 3600 });
  }
}
