import { PrismaService } from 'src/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateMovieService } from './update-movie.service';
import { MovieDataProvider } from 'test/shared/movie';

describe('UpdateMovieService', () => {
  let service: UpdateMovieService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const mockedMovie = MovieDataProvider.getMockedMovie();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateMovieService,
        {
          provide: PrismaService,
          useValue: {
            movie: {
              findFirst: () => mockedMovie,
            },
          },
        },
      ],
    }).compile();

    service = module.get(UpdateMovieService);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw if no movie is found', async () => {
    jest
      .spyOn(prismaService.movie, 'findFirst')
      .mockResolvedValueOnce(undefined);

    const promise = service.handle('any_id', { name: 'The Matrix' });
    await expect(promise).rejects.toThrow();
  });
});
