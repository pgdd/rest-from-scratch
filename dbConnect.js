const mysql = require("mysql2")
require("dotenv").config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

db.connect(err => {
    if(err) {
        console.log("Error from DB", err)
    }

    console.log("Db connected")
})

module.exports = db;