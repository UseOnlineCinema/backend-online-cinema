import { Test, TestingModule } from '@nestjs/testing';
import { ListMovieService } from './list-movie.service';

describe('ListMovieService', () => {
  let service: ListMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListMovieService],
    }).compile();

    service = module.get<ListMovieService>(ListMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
