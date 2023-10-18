const {createConnection} = require('mysql2')
require('dotenv').config()

const db = createConnection({
    host: 'localhost',
    password: process.env.PASSWORD,
    user: 'root',
    port: 3306,
    database: process.env.DATABASE
})



module.exports = db;