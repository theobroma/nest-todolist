import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemDto } from './interfaces/item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  getItems() {
    return 'we get all items';
  }
  @Post()
  create(@Body() itemDto: ItemDto) {
    return itemDto;
  }
}
