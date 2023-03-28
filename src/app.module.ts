import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule } from './carts/carts.module';
import { FavouritesModule } from './favourites/favourites.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: (process.env.POSTGRES_PORT || 5432) as number,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      ssl:
        process.env.POSTGRES_SSL?.toLocaleLowerCase() === 'true' ? true : false,
      autoLoadEntities: true,
      synchronize: true,
      // logging: 'all',
      // migrations
    }),
    UsersModule,
    ProductsModule,
    FavouritesModule,
    OrdersModule,
    CartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
