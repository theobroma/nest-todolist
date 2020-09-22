import { Item } from './items.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateItemDto } from './interfaces/item.dto';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  createItem = async (itemDto: CreateItemDto) => {
    return await this.save(itemDto);
  };
  removeItem = async (id: number) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
  updateItem = async (id: number, itemDto: CreateItemDto) => {
    return this.save({ ...itemDto, id: Number(id) });
  };
}
