const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 10,
        match: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ]+$/
    },
    apellido: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 10,
        match: /^[a-zA-ZáéíóúüÁÉÍÓÚÜ]+$/
    },
    correo: {
        type: String,
        required: true,
        minlenght: 7,
        maxlenght: 30,
        unique: true,
        match: [/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,"Email invalido!"]
    },
    password: {
        type: String,
        required: true,
        minlenght: 4,
        maxlenght: 20
    }
},{
    timestamps: true,
    versionKey: false
})

exports.userModel = mongoose.model('user', userSchema)


/*
{
"nombre": "Carlos",
"apellido": "mrtnz",
"correo": "carlos@gmail.com",
"password": "clave"
}
*/