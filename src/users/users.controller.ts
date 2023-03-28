import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginationDtoResponse } from '../common/pagination.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  // @ApiOkResponse({ type: PaginationDto<UserDto> })
  @ApiPaginationDtoResponse()
  findAll(@Query() queryUserDto: QueryUserDto) {
    return this.usersService.findAll(queryUserDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: UserDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: UserDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
