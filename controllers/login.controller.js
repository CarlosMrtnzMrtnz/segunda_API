const { userModel } = require("../models/user.model")
const jwt = require('jsonwebtoken')

exports.login = async (req, res)=> {
    try {
        let {correo, password} = req.body
        let user = await userModel.findOne({correo})
        if (!user) {
            return res.status(401).json({erro:"Correo invalido!"})
        }
        if (user.password == password) {
            let payload = {
                correo: user.correo,
                id: user._id,
                nombre: `${user.nombre} ${user.apellido}`
            }
            let SECRET_JWT_KEY = process.env.SECRET_JWT_KEY

            const token = jwt.sign(payload, SECRET_JWT_KEY, {expiresIn:"24h"} )

            res.status(200).json({msj:`Bienvenido ${payload.nombre}`,token})
        } else {
            return res.status(401).json({error:"Password invalido!"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}