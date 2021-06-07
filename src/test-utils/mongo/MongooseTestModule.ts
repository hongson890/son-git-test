import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from "mongoose";

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = new MongoMemoryServer();
      const mongoUri = await mongod.getUri();
      return {
        uri: mongoUri,
        ...options,
      };
    },
  });


export const closeInMongodConnection = async (done) => {
  try {
    if (mongod) await mongod.stop();
    done();
  } catch (error) {
    console.log(error);
    done();
  }
};
