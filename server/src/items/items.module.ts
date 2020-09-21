import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items.entity';
import { ItemRepository } from './items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemRepository])],
  controllers: [ItemsController],
})
export class ItemsModule {}
