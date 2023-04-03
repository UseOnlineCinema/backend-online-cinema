export abstract class IGetSignedUrlGateway {
  abstract handle(): Promise<string>;
}
