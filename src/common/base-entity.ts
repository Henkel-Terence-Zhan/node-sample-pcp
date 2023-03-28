import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryColumn({ generated: 'identity' })
  @Expose()
  id: number;

  @CreateDateColumn()
  @Expose()
  createdAt: Date;
  @Column({ nullable: true })
  @Expose()
  createdBy: number;

  @UpdateDateColumn()
  @Expose()
  updatedAt: Date;
  @Column({ nullable: true })
  @Expose()
  updatedBy: number;
}
