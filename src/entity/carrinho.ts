import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm"
import { produto } from "./produto"
import { Venda } from "./vendas"
 
@Entity("carrinho")
export class Carrinho {
    @PrimaryGeneratedColumn()
    idcarrinho: number

    @Column()
    quantidade:number

    @Column()
    preco: string

    @ManyToOne(() => produto, (produto) => produto.idproduto)
    @JoinColumn({name:'id_produto'})
    id_produto: produto[]

    @ManyToOne(() => Venda,(venda) => venda.idvenda)
    @JoinColumn({name:'id_venda'})
    id_venda: Venda[]
}