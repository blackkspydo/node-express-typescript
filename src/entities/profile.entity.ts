import { Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn, Relation } from "typeorm";
import { User } from "./user.entity.js";
@Entity()
export class Profile{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    profileUrl: string

    @Column()
    bio: string

    @Column({
        type: "boolean",
        default: false
    })
    isAvailable: boolean

    @OneToOne(()=>User,user=>user.profile,{cascade:true})
    @JoinColumn()
    user:Relation<User>

}