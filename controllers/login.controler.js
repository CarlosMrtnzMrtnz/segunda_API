const { userModel } = require("../models/user.model")
const jwt = require('jsonwebtoken')
exports.login = async (req, res)=> {
    try {
        let data = req.body
        let user = await userModel.findOne({correo:data.correo})

        if (user) {
            if (data.password === user.password) {
                let token = jwt.sign({correo:user.correo,nombre:user.nombre},process.env.SECRET_JWT_KEY,{expiresIn:"24h"})
                res.status(200).json(token)
            } else {
                return res.status(401).json({error:"Password invalido"})
            }
        } else {
            return res.status(401).json({error: "Correo invalido!"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}