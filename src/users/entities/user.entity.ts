import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;
  @Column({ nullable: true })
  createdBy: string;

  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true })
  updatedBy: string;
}
