import { Test, TestingModule } from '@nestjs/testing';
import { CreateMovieController } from './create-movie.controller';

describe('CreateMovieController', () => {
  let controller: CreateMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateMovieController],
    }).compile();

    controller = module.get<CreateMovieController>(CreateMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
