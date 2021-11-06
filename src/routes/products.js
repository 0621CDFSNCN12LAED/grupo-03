const express = require("express");
const router = express.Router();

//multer
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage(
    {
        destination: path.join(__dirname, "../../public/images/products"),
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    }
);

const uploader = multer({ storage });


//validations (no funcionan aun)
/*
const productValidations = require("../validations/product-validations");
const assertValidations = require("../validations/assert-validations");
*/

//middlewares
const authAdminMiddleware = require("../middlewares/auth-admin-middleware");

//controllers
const productsController = require("../controllers/products-controller.js");

//Create
router.get("/create",authAdminMiddleware, productsController.create);
router.post(
    "/",
    /*
    productValidations, 
    assertValidations, 
    */
    uploader.single("image"), 
    productsController.store
);

//Read
router.get("/", productsController.index);
router.get("/Cart", productsController.cart);
router.get("/category/:id", productsController.byCategory);
router.get("/:id", productsController.detail);

//Update
router.get("/:id/edit",authAdminMiddleware, productsController.edit);
router.put(
    "/:id",
    /*
    productValidations, 
    assertValidations, 
    */
    uploader.single("image"), 
    productsController.update
);

//Destroy
router.get("/:id/delete", authAdminMiddleware, productsController.delete);
router.delete("/:id", productsController.destroy);

module.exports = router;