import { ItemsService } from './items.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto, ItemType } from './interfaces/item.dto';
import { ItemRepository } from './items.repository';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(
    @InjectRepository(ItemRepository)
    private readonly itemRepository: ItemRepository, // private readonly itemsService: ItemsService,
  ) {}

  @Get()
  findAll(): Promise<ItemType[]> {
    // return this.itemsService.findAll();
    // return [{ id: 1, text: 'task1', completed: false }];
    return this.itemRepository.find();
  }
  // getItems() {
  //   return 'we get all items';
  // }
  @Post()
  @ApiOperation({ summary: 'Create item' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid request.' })
  create(@Body() data: CreateItemDto) {
    return this.itemRepository.createItem(data);
    // return this.itemsService.create(data);
  }
}
