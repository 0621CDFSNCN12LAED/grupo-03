const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller.js");

//ruta al carrito
router.get("/Cart", productsController.cart);

//listado de todos los productos
router.get("/", productsController.index);

//Crear un producto
router.get("/create", productsController.create);
router.post("/", productsController.store);

//detalle de un prodcuto particular
router.get("/:id", productsController.detail);

//Editar un producto
router.get("/:id/edit", productsController.edit);
router.put("/:id", productsController.update);

//Borrar un producto
router.delete("/:id", productsController.destroy);


module.exports = router;