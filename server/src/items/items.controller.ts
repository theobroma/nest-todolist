import { ItemsService } from './items.service';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Item } from './items.entity';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Item,
  },
})
@ApiTags('items')
@Controller('items')
export class ItemsController implements CrudController<Item> {
  constructor(public service: ItemsService) {}
}
