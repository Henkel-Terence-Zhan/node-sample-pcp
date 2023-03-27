import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../common/base-entity';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Order extends BaseEntity {
  @Column({})
  orderNumber: string;

  @ManyToOne(() => User, { nullable: false })
  owner: User;

  @ManyToMany(() => Product, { nullable: false })
  @JoinTable({ name: `order_products` })
  products: Product[];
}
