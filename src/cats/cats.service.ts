import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cat';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async listAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async create(cat: Cat): Promise<Cat> {
    const catCriado = new this.catModel(cat);

    return catCriado.save();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async update(id: string, cat: Cat): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, cat).exec();
  }

  async delete(id: string) {
    const deletedCat = this.catModel.findOneAndDelete({ _id: id }).exec();

    return (await deletedCat).remove();
  }
}
