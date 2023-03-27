import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Cart } from '../../carts/entities/cart.entity';
import { BaseEntity } from '../../common/base-entity';
import { Favourite } from '../../favourites/entities/favourite.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({ length: 64 })
  title: string;

  @Column({ length: 255 })
  subTitle: string;

  @Column()
  packShotUrl: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'float' })
  rating: number;

  @Column()
  type: string;
  @Column()
  brand: string;
  @Column()
  ingredients: string;

  // it should be used to recommend the product;
  @Column({ type: 'int8' })
  greyCoverage: number;
  @Column({ type: 'float' })
  price: number;

  @Column()
  promotion: string;

  @ManyToMany(() => Order, (order) => order.products, { lazy: true })
  orders: Promise<Order[]>;
  @OneToMany(() => Favourite, (favourite) => favourite.product, { lazy: true })
  favorites: Promise<Favourite[]>;
  @OneToMany(() => Cart, (cart) => cart.product, { lazy: true })
  cart: Promise<Cart[]>;
}
