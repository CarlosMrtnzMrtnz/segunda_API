const jwt = require('jsonwebtoken')

exports.middlewareJWT = (req, res, next)=> {
    try {
        let token = req.headers.authorization
        token = token.split(" ")[1]
        
        jwt.verify(token, process.env.SECRET_JWT_KEY, (error, decode)=>{
            if (error) {
               return res.status(401).json(error)
            }
            req.decode = decode
            next()
        })
        
    } catch (error) {
        res.status(500).json(error)
    }
}