import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MONGO_URL } from '../configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URL),
            CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
