import Categoria from "../models/Categoria.js";
import Produto from "../models/Produto.js";

class CategoriaController {

    static async criar(req, res) {
        const categoria = await Categoria.create(req.body);
        res.status(201).json(categoria);
    }

    static async listar(req, res) {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    }




     static async excluir(req, res) {

        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({
                mensagem: "Categoria não encontrada"
            });
        }

        await categoria.destroy();

        res.json({
            mensagem: "Categoria removida"
        });
    }


     static async valorTotal(req, res) {

        const categoria = await Categoria.findByPk(req.params.id, {
            include: Produto
        });

        const total = categoria.Produtos.reduce(
            (soma, produto) =>
                soma + (produto.preco * produto.quantidade),
            0
        );

        res.json({
            categoria: categoria.nome,
            valorTotal: total
        });
    }
}

export default CategoriaController;