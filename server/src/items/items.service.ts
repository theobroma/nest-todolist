import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './items.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class ItemsService extends TypeOrmCrudService<Item> {
  constructor(@InjectRepository(Item) itemRepository) {
    super(itemRepository);
  }
}
