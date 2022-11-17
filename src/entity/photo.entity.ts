import { Column,PrimaryGeneratedColumn,JoinColumn, Entity, ManyToOne, Relation } from "typeorm";
import { User } from "./user.entity.js";

@Entity()
export class Photo{
    @PrimaryGeneratedColumn('uuid')
    id:string
    
    @Column({
        type: "varchar",
        length: 255,
        nullable: false,
    })
    url!:string

    @ManyToOne(()=>User,user=>user.photos)
    user:Relation<User>
}