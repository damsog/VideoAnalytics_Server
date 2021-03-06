const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const images = sequelize.define("images",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    coder_img_route: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    coder: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    is_encoded: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false
    },
    time_creation: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

module.exports = images;