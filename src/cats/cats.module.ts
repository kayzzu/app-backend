import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cat';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cat.name,
        schema: CatSchema,
      },
    ]),
  ],
  exports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
