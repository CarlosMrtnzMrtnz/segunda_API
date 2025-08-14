const { productsModel } = require("../models/products.model")

exports.getProducts = async (req, res)=> {
    try {
        let data = await productsModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getOneProduct = async (req, res)=> {
    try {
        let id = req.params.id
        let product = await productsModel.findById(id)
        res.json(product)
    } catch (error) {
        res.json(error)
    }
}

exports.createProduct = async (req, res)=> {
    try {
        let body = req.body
        console.log(body);

        let newProduct = new productsModel(body)
        let guardado = await newProduct.save()
        res.status(201).json(guardado)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateProduct = async (req, res)=> {
    try {
        let id = req.params.id
        let data = req.body
        let info = req.data

        let busqueda = await productsModel.findById(id)
        if (!busqueda) {
            return res.json({error:"Producto no encontrado!"})
        }
        let actualizado = await productsModel.updateOne({_id:id},{$set:data})
        res.json(actualizado)

        // let updataeAll = await productsModel.updateMany({},{$unset:{__v:""}})
        // res.json(updataeAll)

    } catch (error) {
        res.json(error)
    }
}

exports.deleteProduct = async (req, res)=> {
    try {
        let id = req.params.id
        let product = await productsModel.findById(id)
        if (!product) {
            return res.status(404).json({msj:"Product no found!"})
        }
        let deleteado = await productsModel.deleteOne({_id: id})
        res.status(200).json({msj:"Deleato!"})
    } catch (error) {
        res.status(500).json(error)
    }
}

// const postAlquiler = async (req, res) => {
//     const inputData = req.body 
//     try {
//         const verificarBicicleta = await aquilerModel.findOne({_id: inputData.bicicleta}) //en inputData.bicicleta seria igual al id de la bicicleta que se alquila
//         if (verificarBicicleta.estado == "disponible") {
//             const data = await aquilerModel.create(inputData)
//             res.json({msj:"Alquiler creado correctamente", createData: data})
//         } else {
//             res.json({msj:"bicicleta esta ocupada o en mantenimiento"})
//         }

//     } catch (error) {
//         res.json({msj: "Ocurrio un error al creal el alquiler"})
//     }
// }

