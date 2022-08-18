import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Venda } from "./vendas"

@Entity("cliente")
export class cliente {
    @PrimaryGeneratedColumn()
    idcliente: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    fone: number

    @OneToMany(() => Venda,(venda)=> venda.idcliente)
    vendas: Venda[]

}
