import { Router } from "express";

import ProdutoController from "../controllers/ControllerProduto.js";
import CategoriaController from "../controllers/ControllerCategoria.js";

const router = Router();

//!Categorias

router.post("/categorias", CategoriaController.criar);
router.get("/categorias", CategoriaController.listar);
router.delete("/categorias/:id", CategoriaController.excluir);
router.get("/categorias/:id/valor-total", CategoriaController.valorTotal);

//!Produtos

router.post("/produtos", ProdutoController.criar);
router.get("/produtos", ProdutoController.listar);
router.get("/produtos/:id", ProdutoController.buscarPorId);
router.put("/produtos/:id", ProdutoController.atualizar);
router.delete("/produtos/:id", ProdutoController.excluir);

export default router;