import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import 'dotenv/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION), CatsModule],
})
export class AppModule {}
