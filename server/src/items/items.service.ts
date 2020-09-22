import { Injectable } from '@nestjs/common';
import { ItemType } from './interfaces/item.dto';

@Injectable()
export class ItemsService {
  private readonly items: ItemType[] = [];
  //   private readonly items: ItemType[] = [
  //     { id: 1, text: 'task1', completed: false },
  //   ];

  create(item: ItemType) {
    this.items.push(item);
  }

  findAll(): ItemType[] {
    return this.items;
  }
}
