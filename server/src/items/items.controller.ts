import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  getItems() {
    return 'we get all items';
  }
}
