const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/products-api-controller');

//Create
router.post('/create', productsAPIController.create);

//Read
router.get('/', productsAPIController.list);
router.get('/:id', productsAPIController.detail);

//Update
router.put('/update/:id', productsAPIController.update);

//Delete
router.delete('/delete/:id', productsAPIController.destroy);

module.exports = router;