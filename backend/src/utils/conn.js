const { Sequelize } = require("sequelize")
const pg = require('pg')
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        port: 5432,
        dialect: 'postgres',
        dialectModule: pg,
        logging: process.env.NODE_ENV === "development" ? (...msg) => console.log(msg) : false,
        // dialectOptions: {
        //     ssl: process.env.POSTGRES_URL.includes('sslmode=require') ? { rejectUnauthorized: false } : false,
        // } 
    }
)

module.exports = sequelize