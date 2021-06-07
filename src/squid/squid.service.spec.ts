import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { SquidService } from './squid.service';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../test-utils/mongo/MongooseTestModule';
import { SquidSchema } from './model/squid.schema';
import * as mongoose from 'mongoose';

describe('SquidService', () => {
  let service: SquidService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Squid', schema: SquidSchema }]),
      ],
      providers: [SquidService],
    }).compile();

    service = module.get<SquidService>(SquidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterAll(async (done) => {
    await closeInMongodConnection(done);
    mongoose.disconnect();
    mongoose.connection.close();
  });
});
