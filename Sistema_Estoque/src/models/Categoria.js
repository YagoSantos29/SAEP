import { DataTypes } from "sequelize";
import sequelize from "../database/dbConnection.js";

const Categoria = sequelize.define("Categoria", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Categoria;