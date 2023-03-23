import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true })
  @Expose()
  @IsNotEmpty()
  name: string;

  @ApiProperty({})
  @Expose()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: false })
  @Expose()
  password: string;
}
