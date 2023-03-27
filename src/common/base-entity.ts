import {
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryColumn({ generated: 'identity' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;
  @Column({ nullable: true })
  createdBy: number;

  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true })
  updatedBy: number;
}
