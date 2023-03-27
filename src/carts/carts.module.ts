import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { Cart } from './entities/cart.entity';

@Module({
  controllers: [CartsController],
  providers: [CartsService],
  imports: [TypeOrmModule.forFeature([Cart])],
})
export class CartsModule {}
