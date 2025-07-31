// const userModel = require('../models/user.model')
const { default: mongoose } = require("mongoose")
const {userModel} = require("../models/user.model")

exports.getUsers = async (req, res)=> {
    try {
        let data = await userModel.find()
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.getOneUser = async (req, res)=> {
    try {
        let id = req.params.id
        let user = await userModel.findById(id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(205).json({msj:"User not found!"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.createUser = async (req, res)=> {
    try {
        let data = req.body
        let newUser = new userModel(data)
        let guardado = await newUser.save()
        res.status(201).json(guardado)
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.updateUser = async (req, res)=> {
    try {
        let data = req.body
        let id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error:"Id invalida!"})        
        }
        let dataActualizado = await userModel.updateOne({_id:id},{$set:data})

        res.status(200).json(dataActualizado)
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.deleteUser = async (req, res)=> {
    try {
        let id = req.params.id
        let borrar = await userModel.findById(id)
        if (!borrar) {
            return res.status(400).json({error:"User not found!"})
        }
        let borrado = await userModel.deleteOne({_id:id})
        res.status(200).json(borrado)
    } catch (error) {
        res.status(500).json(error)
    }
}