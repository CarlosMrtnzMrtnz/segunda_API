const express = require('express')
const { getProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')
const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { middlewareJWT } = require('../middleware/jwt')
const { login } = require('../controllers/login.controller')
const router = express.Router()

//--------- Rutas Products --------->
router.get('/products', middlewareJWT, getProducts)
router.get('/product/:id', getOneProduct)
router.post('/createProduct', createProduct)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)

//------------ Rutas de Users ------->
router.get('/users', getUsers)
router.get('/user/:id', getOneUser)
router.post('/userCreate', createUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

//------------- Login ---------------->
router.post('/login', login)


module.exports = router