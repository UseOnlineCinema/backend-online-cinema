import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMovieController } from './delete-movie.controller';

describe('DeleteMovieController', () => {
  let controller: DeleteMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteMovieController],
    }).compile();

    controller = module.get<DeleteMovieController>(DeleteMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
