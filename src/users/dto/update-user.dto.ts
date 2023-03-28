import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Expose()
  name: string;

  @ApiProperty({})
  @IsNotEmpty()
  @Expose()
  email: string;
}
