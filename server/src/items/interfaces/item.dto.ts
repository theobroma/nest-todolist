import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class ItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly text: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly completed: boolean;
}
