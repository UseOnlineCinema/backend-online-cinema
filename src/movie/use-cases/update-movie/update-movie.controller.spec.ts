import { Test, TestingModule } from '@nestjs/testing';
import { UpdateMovieController } from './update-movie.controller';

describe('UpdateMovieController', () => {
  let controller: UpdateMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateMovieController],
    }).compile();

    controller = module.get<UpdateMovieController>(UpdateMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
