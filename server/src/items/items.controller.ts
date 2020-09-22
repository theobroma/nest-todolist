// import { ItemsService } from './items.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  create(@Body() itemDto: CreateItemDto) {
    return this.itemRepository.createItem(itemDto);
    // return this.itemsService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itemRepository.removeItem(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() itemDto: CreateItemDto) {
    return this.itemRepository.updateItem(id, itemDto);
  }
}
