import { DataSource } from "typeorm"
import { cliente } from "./src/entity/cliente"
import { Venda } from "./src/entity/vendas"
import { Carrinho } from "./src/entity/carrinho"
import { produto } from ".//src/entity/produto"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [cliente,Venda,Carrinho,produto],
    logging: false,
    synchronize: true
})


