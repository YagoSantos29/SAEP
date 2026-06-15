import Produto from "../models/Produto.js";
import Categoria from "../models/Categoria.js";

class ProdutoController {

    static async criar(req, res) {
    try {

        const produto = await Produto.create(req.body);

        res.status(201).json(produto);

    } catch (error) {

        console.error("ERRO:", error.message);
        console.error("MYSQL:", error.parent?.sqlMessage);

        res.status(500).json({
            erro: error.message,
            mysql: error.parent?.sqlMessage
        });
    }
}

   static async listar(req, res) {
    try {

        const produtos = await Produto.findAll({
            include: Categoria
        });

        res.json(produtos);

    } catch (error) {

        console.error("ERRO:", error.message);
        console.error("MYSQL:", error.parent?.sqlMessage);
        console.error("SQL:", error.sql);

        res.status(500).json({
            erro: error.message,
            mysql: error.parent?.sqlMessage
        });
    }
}

    static async buscarPorId(req, res) {

        const produto = await Produto.findByPk(
            req.params.id,
            {
                include: Categoria
            }
        );

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json(produto);
    }

    static async atualizar(req, res) {

        const produto = await Produto.findByPk(req.params.id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        await produto.update(req.body);

        res.json(produto);
    }

    static async excluir(req, res) {

        const produto = await Produto.findByPk(req.params.id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        await produto.destroy();

        res.json({
            mensagem: "Produto removido"
        });
    }


    
}

export default ProdutoController;