const express = require('express')
const connetDB = require('./config/db')
const router = require('./routes/router')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT



app.use(express.json())
app.use('/api', router)

app.use('/api/health', (req, res)=> {
    res.json({
        msj:"Api is health!"
    })
})
connetDB()
app.listen(PORT, ()=> {    
    console.log(`Server running on PORT : ${PORT}`);
})