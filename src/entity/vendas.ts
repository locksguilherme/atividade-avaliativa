import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm"
import { cliente } from "./cliente"
 
@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    idvenda: number

    @Column()
    url:string

    @ManyToOne(() => cliente, (cliente) => cliente.vendas)
    @JoinColumn({name:'id_cliente'})
    idcliente: cliente[]
}