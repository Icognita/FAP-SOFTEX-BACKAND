const express = require("express")
const { loadavg } = require("os")

const app = express()

app.use(express.json())


app.listen(3333,()=>{
    console.log("Servidor rodadno na porta: 3333");
})