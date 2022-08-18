
import { DataSource } from "typeorm"
import { Venda } from "./entity/vendas"
import { cliente } from "./entity/cliente"




const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Venda,cliente],
    synchronize: true,
    logging: false,
})

export default dataSource