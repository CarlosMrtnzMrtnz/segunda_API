const jwt = require('jsonwebtoken')

exports.middlewareJWT = (req, res, next)=> {
    try {
        let token = req.headers.authorization
        if (!token) {
            return res.status(401).json({error:"Token no suministrado!"})
        }
        token = token.split(" ")[1]

        jwt.verify(token, process.env.SECRET_JWT_KEY, (error, decode)=> {
            if (error) {
                return res.status(401).json({error: "Token invalido"}, error)
            }
            req.data = decode // es lo que viene en el payload
            next()
        })
    } catch (error) {
        res.status(500).json(error)
    }
}