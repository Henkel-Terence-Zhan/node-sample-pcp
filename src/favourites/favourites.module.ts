import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favourite } from './entities/favourite.entity';
import { FavouritesController } from './favourites.controller';
import { FavouritesService } from './favourites.service';

@Module({
  controllers: [FavouritesController],
  providers: [FavouritesService],
  imports: [TypeOrmModule.forFeature([Favourite])],
})
export class FavouritesModule {}
