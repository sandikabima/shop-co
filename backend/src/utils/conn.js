const { Sequelize } = require("sequelize");
const pg = require('pg');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectModule: pg,
        protocol: 'postgres',
        logging: process.env.NODE_ENV === "development" ? (...msg) => console.log(msg) : false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    });
} else {
    sequelize = new Sequelize(
        process.env.POSTGRES_DATABASE,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        {
            host: process.env.POSTGRES_HOST,
            port: 5432,
            dialect: 'postgres',
            dialectModule: pg,
            logging: process.env.NODE_ENV === "development" ? (...msg) => console.log(msg) : false,
        }
    );
}

module.exports = sequelize;
