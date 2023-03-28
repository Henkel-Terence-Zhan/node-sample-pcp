import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { QueryDto } from '../../common/query.dto';

export class QueryUserDto extends QueryDto {
  @Expose()
  @ApiProperty({ required: false })
  name: string;

  @Expose()
  @ApiProperty({ required: false })
  email: string;
}
