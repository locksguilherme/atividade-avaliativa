import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Carrinho } from "./carrinho"

@Entity("produto")
export class produto {
    @PrimaryGeneratedColumn()
    idproduto: number

    @Column()
    descricao: string

    @Column()
    preco: string

    @Column()
    estoque: number

    @OneToMany(() => Carrinho,(carrinho)=> carrinho.id_produto)
    produto: Carrinho[]

}
