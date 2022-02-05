import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cat } from './cat';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async listAll(): Promise<Cat[]> {
    return this.catsService.listAll();
  }

  @Post()
  async create(@Body() cat: Cat): Promise<Cat> {
    return this.catsService.create(cat);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedCat: Cat): Promise<Cat> {
    return this.catsService.update(id, updatedCat);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cat> {
    return this.catsService.delete(id);
  }
}
