import { Expose } from 'class-transformer';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Cart } from '../../carts/entities/cart.entity';
import { BaseEntity } from '../../common/base-entity';
import { Favourite } from '../../favourites/entities/favourite.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
@Index(['email', 'password'])
export class User extends BaseEntity {
  @Column({ nullable: false })
  @Expose()
  name: string;

  @Column({ nullable: false, unique: true })
  @Expose()
  email: string;

  @Column({ nullable: false })
  @Expose()
  password: string;

  @OneToMany(() => Favourite, (favorites) => favorites.owner, { lazy: true })
  carts: Promise<Cart[]>;
  @OneToMany(() => Favourite, (favorites) => favorites.owner, { lazy: true })
  orders: Promise<Order[]>;
  @OneToMany(() => Favourite, (favorites) => favorites.owner, { lazy: true })
  favorites: Promise<Favourite[]>;
}
