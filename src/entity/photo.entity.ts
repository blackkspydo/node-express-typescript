import { Column,PrimaryGeneratedColumn,JoinColumn, Entity, ManyToOne, Relation } from "typeorm";
import { User } from "./user.entity.js";

@Entity()
export class Photo{
    @PrimaryGeneratedColumn('uuid')
    id:string
    
    @Column()
    url:string

    @ManyToOne(()=>User,user=>user.photos,{cascade:true})
    user:User
}