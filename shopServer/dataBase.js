const mysql = require("mysql")
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "0712",
    database: "shopcenter",
    port: "3306"
})
module.exports = pool;