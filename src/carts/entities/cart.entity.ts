import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../common/base-entity';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Cart extends BaseEntity {
  //TODO: add properties for the Cart Entity

  @ManyToOne(() => Product, { nullable: false })
  product: Product;

  @ManyToOne(() => User, { nullable: false })
  owner: User;
}
