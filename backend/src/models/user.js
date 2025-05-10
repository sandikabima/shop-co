const { Sequelize } = require("sequelize")
const sequelize = require("../utils/conn")

const user = {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.STRING,
    },
    refresh_token: {
        type: Sequelize.TEXT
    }
}