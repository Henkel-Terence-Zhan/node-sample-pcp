import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { UpdateUserDto } from './update-user.dto';

export class CreateUserDto extends PartialType(UpdateUserDto) {
  @ApiProperty({ required: false })
  @Expose()
  password: string;
}
