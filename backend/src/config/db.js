const { Pool } = require("undici-types")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "cortinas_db",
    password: "123456",
    port: 5432,
})