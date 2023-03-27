import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../common/base-entity';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Favourite extends BaseEntity {
  @ManyToOne(() => User, { nullable: false })
  owner: User;

  @ManyToOne(() => Product, { nullable: false })
  product: Product;
}
