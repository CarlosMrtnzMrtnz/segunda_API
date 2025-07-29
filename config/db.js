const mongoose = require('mongoose')

const connetDB = async ()=> {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Conectado a la Base de datos!");
    } catch (error) {
        console.log("Error al conectar a la DB", error);
    }
}

module.exports = connetDB