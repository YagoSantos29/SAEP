import { DataTypes } from "sequelize";
import sequelize from "../database/dbConnection.js";
import Categoria from "./Categoria.js";


const Produto = sequelize.define("Produto", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

Categoria.hasMany(Produto, {
    foreignKey: {
        allowNull: false,
        name: "categoriaId"
    }
});
Produto.belongsTo(Categoria, {
    foreignKey: {
       name: "categoriaId"
    }
});

export default Produto;