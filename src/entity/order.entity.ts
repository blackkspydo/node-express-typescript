import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Order {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    orderNumber:string
}