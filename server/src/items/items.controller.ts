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
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto, NotFoundResponse } from './interfaces/item.dto';
import { ItemRepository } from './items.repository';
import { Item } from './items.entity';

@ApiTags('items')
// @Crud({
//   model: {
//     type: Item,
//   },
// })
@Controller('items')
export class ItemsController {
  constructor(
    @InjectRepository(ItemRepository)
    private readonly itemRepository: ItemRepository, // private readonly itemsService: ItemsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all items' })
  @ApiResponse({
    status: 200,
    description: 'get all todos',
    type: [Item],
  })
  findAll(): Promise<Item[]> {
    // return this.itemsService.findAll();
    // return [{ id: 1, text: 'task1', completed: false }];
    return this.itemRepository.find();
  }
  // getItems() {
  //   return 'we get all items';
  // }
  @Post()
  @ApiOperation({ summary: 'Create item' })
  @ApiBody({ type: CreateItemDto })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: Item,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    type: NotFoundResponse,
  })
  create(@Body() itemDto: CreateItemDto): Promise<Item> {
    return this.itemRepository.createItem(itemDto);
    // return this.itemsService.create(data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete item by ID' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'The record was not found.' })
  remove(@Param('id') id: number) {
    return this.itemRepository.removeItem(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update item by ID' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'The record was not found.' })
  update(@Param('id') id: number, @Body() itemDto: CreateItemDto) {
    return this.itemRepository.updateItem(id, itemDto);
  }
}
