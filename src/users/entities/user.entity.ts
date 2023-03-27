import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/base-entity';
import { Cart } from '../../carts/entities/cart.entity';
import { Order } from '../../orders/entities/order.entity';
import { Favourite } from '../../favourites/entities/favourite.entity';

@Entity()
@Index(['email', 'password'])
export class User extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => Favourite, (favorites) => favorites.owner, { lazy: true })
  carts: Promise<Cart[]>;
  @OneToMany(() => Favourite, (favorites) => favorites.owner, { lazy: true })
  orders: Promise<Order[]>;
  @OneToMany(() => Favourite, (favorites) => favorites.owner, { lazy: true })
  favorites: Promise<Favourite[]>;
}
