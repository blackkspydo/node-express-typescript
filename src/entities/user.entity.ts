import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, Relation, OneToOne } from 'typeorm';
import { Person } from './person.entity.js';
import { Photo } from './photo.entity.js';
import { Profile } from './profile.entity.js';

@Entity()
export class User extends Person {
  @Column()
  createdAt: Date;

  @Column({
    nullable: true
  })
  updatedAt: Date;

  @Column({
    type: 'boolean',
    default: false
  })
  isVerified: boolean;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Relation<Profile>;
}
