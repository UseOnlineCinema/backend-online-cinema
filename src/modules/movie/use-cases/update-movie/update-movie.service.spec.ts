import { Test, TestingModule } from '@nestjs/testing';
import { UpdateMovieService } from './update-movie.service';
import { MovieDataProvider } from '../../../../../test/shared/movie';
import { Movie } from '../../database/movie.model';
import { getModelToken } from '@nestjs/sequelize';

describe('UpdateMovieService', () => {
  let service: UpdateMovieService;
  let movieModel: typeof Movie;

  beforeEach(async () => {
    const mockedMovie = MovieDataProvider.getMockedMovie();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateMovieService,
        {
          provide: getModelToken(Movie),
          useValue: {
            findByPk: () => mockedMovie,
            update: () => [[], ['test']],
          },
        },
      ],
    }).compile();

    service = module.get(UpdateMovieService);
    movieModel = module.get(getModelToken(Movie));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw if no movie is found', async () => {
    jest.spyOn(movieModel, 'findByPk').mockResolvedValueOnce(undefined);

    const promise = service.handle('any_id', { name: 'The Matrix' });
    await expect(promise).rejects.toThrow();
  });
});
