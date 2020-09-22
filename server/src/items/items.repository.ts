import { Item } from './items.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateItemDto } from './interfaces/item.dto';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  createItem = async (itemDto: CreateItemDto) => {
    return await this.save(itemDto);
  };
}
