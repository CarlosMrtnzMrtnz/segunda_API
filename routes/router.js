const express = require('express')
const { getProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')
const router = express.Router()

//--------- Rutas Products --------->
router.get('/products', getProducts)
router.get('/product/:id', getOneProduct)
router.post('/createProduct', createProduct)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)





module.exports = router