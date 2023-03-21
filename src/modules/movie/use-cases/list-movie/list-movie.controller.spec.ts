import { Test, TestingModule } from '@nestjs/testing';
import { ListMovieController } from './list-movie.controller';

describe('ListMovieController', () => {
  let controller: ListMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListMovieController],
    }).compile();

    controller = module.get<ListMovieController>(ListMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
