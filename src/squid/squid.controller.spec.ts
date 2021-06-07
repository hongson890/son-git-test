import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { SquidController } from './squid.controller';
import { SquidService } from './squid.service';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../test-utils/mongo/MongooseTestModule';
import { SquidSchema } from './model/squid.schema';
import * as mongoose from 'mongoose';

// May require additional time for downloading MongoDB binaries
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

describe('SquidController', () => {
  let controller: SquidController;

  beforeEach(async () => {
    console.log('before each');
    jest.setTimeout(30 * 1000);
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Squid', schema: SquidSchema }]),
      ],
      controllers: [SquidController],
      providers: [SquidService],
    }).compile();

    controller = module.get<SquidController>(SquidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  afterAll(async (done) => {
    await closeInMongodConnection(done);
    mongoose.disconnect();
    mongoose.connection.close();
  });
});
