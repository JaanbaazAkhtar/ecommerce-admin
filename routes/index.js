const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/products');
const router = express.Router();

router.get('/products', getAllProducts)
router.post('/products/create', createProduct)
router.post('/products/:id/update_quantity?:number', updateProduct)
router.post('/products/:id', deleteProduct)

module.exports = router;