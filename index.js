const express = require('express')

const app = express()

app.listen(6001, () => {
    console.log("El servidor se ha conectado al puerto 6001")
})