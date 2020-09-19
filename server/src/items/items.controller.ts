import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ItemDto } from './interfaces/item.dto';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  @Get()
  getItems() {
    return 'we get all items';
  }
  @Post()
  @ApiOperation({ summary: 'Create item' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid request.' })
  create(@Body() itemDto: ItemDto) {
    return itemDto;
  }
}
