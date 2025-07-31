const mongoose = require('mongoose')

const productsSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },
    imagen : {
        type: String,
        require: false,
        default: "https://images.pexels.com/photos/10566513/pexels-photo-10566513.jpeg"
    },
    precio: {
        type: Number,
        require: false,
        default: 0
    },
    cantidad: {
        type: Number,
        require: false,
        default: 1
    },
    estado: {
        enum: ["pendiente", "ejecucion","finalizado" ],
        default: "pendiente"
    },
    userId: {
        type:String
    }
}, {
    timestamps: true,
    versioKey: false
})

exports.productsModel = mongoose.model('producto', productsSchema)



/*
{
"nombre": "Nevera",
"imagen": "https://images.pexels.com/photos/2962002/pexels-photo-2962002.jpeg",
"precio": 1500000,
"cantidad": 3,
"userID": "68883541560804994209f61e"
}
*/