import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, TransformationType } from 'class-transformer';

export class QueryDto {
  @ApiProperty({ required: false, default: 1 })
  @Expose()
  @Transform(({ value, type }) => {
    if (type === TransformationType.PLAIN_TO_CLASS) {
      return parse2Int(value);
    }
  })
  page: number;

  @ApiProperty({ required: false, default: 10 })
  @Expose()
  @Transform(({ value, type }) => {
    if (type === TransformationType.PLAIN_TO_CLASS) {
      return parse2Int(value, 10);
    }
  })
  pageSize: number;

  @Expose()
  @Transform(({ type, obj: { page: _page, pageSize: _pageSize } }) => {
    if (type === TransformationType.PLAIN_TO_CLASS) {
      const page = parse2Int(_page, 1);
      const pageSize = parse2Int(_pageSize, 10);
      return (page - 1) * pageSize;
    }
  })
  readonly offset: number;

  @Expose()
  @Transform(({ type, obj: { pageSize: _pageSize } }) => {
    if (type === TransformationType.PLAIN_TO_CLASS) {
      return parse2Int(_pageSize, 10);
    }
  })
  readonly limit: number;
}

const parse2Int = (value: any, defValue = 1): number => {
  if (typeof value === 'string') {
    value = parseInt(value, 10);
  }
  return value || defValue;
};
