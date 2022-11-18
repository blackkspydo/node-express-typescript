import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar'
  })
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false
  })
  email: string;
}
