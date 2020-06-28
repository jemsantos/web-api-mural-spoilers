const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Spoiler = sequelize.define("spoiler", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    titulo: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    },
    espoliador: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
            len: [2, 40]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    }
});

module.exports = Spoiler;