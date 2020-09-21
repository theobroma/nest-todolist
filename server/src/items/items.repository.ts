import { Item } from './items.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ItemDto } from './interfaces/item.dto';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  createItem = async (itemDto: ItemDto) => {
    return await this.save(itemDto);
  };
}
