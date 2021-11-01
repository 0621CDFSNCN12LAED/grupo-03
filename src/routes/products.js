const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const authAdminMiddleware = require("../middlewares/auth-admin-middleware")
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const uploader = multer({ storage });

const productsController = require("../controllers/products-controller.js");

//ruta al carrito
router.get("/Cart", productsController.cart);

//listado de productos
router.get("/", productsController.index);
router.get("/filter/:category", productsController.byCategory)

//Crear un producto
router.get("/create",authAdminMiddleware, productsController.create);
router.post("/", uploader.single("image"), productsController.store);

//detalle de un prodcuto particular
router.get("/:id", productsController.detail);

//Editar un producto
router.get("/:id/edit",authAdminMiddleware, productsController.edit);
router.put("/:id", productsController.update);

//Borrar un producto
router.get("/:id/delete", authAdminMiddleware, productsController.delete);
router.delete("/:id", productsController.destroy);


module.exports = router;