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


app.get('/productos', async (req,res) => {
      let arr1 = await container.getAll();
      res.status(200).json(arr1);
})

app.get('/productosRandom', async (req,res) => {
    let arr2 = await container.getAll();
    var item = arr2[Math.floor(Math.random()*arr2.length)];
    //res.status(200).json(item);
    res.send({item});
})
