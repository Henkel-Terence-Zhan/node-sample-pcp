import { applyDecorators } from '@nestjs/common';
import { ApiHideProperty, ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { QueryDto } from './query.dto';

export class PaginationDto<TData> {
  total: number;

  limit: number;

  offset: number;

  @ApiProperty({ isArray: true, default: [] })
  @ApiHideProperty()
  @IsArray({})
  results: TData[];

  static instance<TQ extends QueryDto, TData>(
    query: TQ,
    total: number,
    results: TData[],
  ): PaginationDto<TData> {
    const { offset, limit } = query;
    return { limit, offset, total, results };
  }
}

export const ApiPaginationDtoResponse = () => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          {
            properties: {
              total: { type: 'number' },
              limit: { type: 'number' },
              offset: { type: 'number' },
              results: {
                type: 'array',
                items: {
                  type: 'object',
                  default: {},
                },
              },
            },
          },
        ],
      },
    }),
  );
};
