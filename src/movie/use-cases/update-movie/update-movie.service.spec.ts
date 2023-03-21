import { PrismaService } from '../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateMovieService } from './update-movie.service';
import { MovieDataProvider } from '../../../../test/shared/movie';

describe('UpdateMovieService', () => {
  let service: UpdateMovieService;

  beforeEach(async () => {
    const mockedMovie = MovieDataProvider;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateMovieService,
        {
          provide: PrismaService,
          useValue: {
            movie: {
              findFirst: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UpdateMovieService>(UpdateMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw if no movie is found', async () => {});
});
