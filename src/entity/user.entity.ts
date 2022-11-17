import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, Relation } from "typeorm"
import { Person } from "./person.entity.js"
import { Photo } from "./photo.entity.js"

@Entity()
export class User extends Person {
    
    @Column("simple-array")
    favFoods: string[]
    
    @OneToMany(()=>Photo,photo=>photo.user,{cascade:true})
    photos: Photo[]

    
}