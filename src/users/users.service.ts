import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import {
  EntityNotFoundError,
  FindOptionsWhere,
  Like,
  Repository,
} from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { PaginationDto } from '../common/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = plainToInstance(User, createUserDto, {
      strategy: 'excludeAll',
    });
    await this.usersRepository.save(user);
    return plainToInstance(UserDto, user, { strategy: 'excludeAll' });
  }

  async findAll(queryDto: QueryUserDto): Promise<PaginationDto<UserDto>> {
    const { offset, limit, name, email } = queryDto;
    const findWhere: FindOptionsWhere<User> = {};
    if (name?.length) {
      findWhere.name = Like(`%${name}%`);
    }
    if (email?.length) {
      findWhere.email = email;
    }

    const [users, total] = await this.usersRepository.findAndCount({
      where: findWhere,
      skip: offset,
      take: limit,
    });
    const results = plainToInstance(UserDto, users, { strategy: 'excludeAll' });

    return PaginationDto.instance(queryDto, total, results);
  }

  /** */
  async findOne(id: number): Promise<UserDto> {
    const user = this.usersRepository.findOneByOrFail({ id });

    return plainToInstance(UserDto, user, { strategy: 'excludeAll' });
  }

  /**
   *
   * @param id
   * @param updateUserDto
   * @returns
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneByOrFail({ id });
    const updateUser = plainToInstance(User, updateUserDto, {
      strategy: 'excludeAll',
    });
    return plainToInstance(
      UserDto,
      await this.usersRepository.update(id, { ...user, ...updateUser }),
      { strategy: 'excludeAll' },
    );
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOneByOrFail({ id });
    await this.usersRepository.remove(user);
    return plainToInstance(
      UserDto,
      { ...user, id },
      { strategy: 'excludeAll' },
    );
  }
}
