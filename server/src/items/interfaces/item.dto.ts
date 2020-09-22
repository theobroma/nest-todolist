import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly id: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly text: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly completed: boolean;
}

export interface ItemType {
  id: number;
  text: string;
  completed: boolean;
}
