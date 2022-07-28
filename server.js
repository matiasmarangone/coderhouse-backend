const express = require('express')
const Contenedor = require("./contenedor");
const container = new Contenedor('./prueba.txt')



const app = express()

const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log("hola")
})

const arr1 = container.getAll();

server.on("error", error => console.log('error'))

app.get('/',(req,res) => {
    res.send({mensaje:'hola mundo'})
})


app.get('/productos',(req,res) => {
      res.send(arr1)
})

