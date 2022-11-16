import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Relation } from "typeorm"
import { Person } from "./person.entity.js"

@Entity()
export class User extends Person {
    
    @Column("simple-array")
    favFoods: string[]

}