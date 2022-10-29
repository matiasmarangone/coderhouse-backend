const express = require('express')
const app = express()
const { Router } = express

//-----------------Puerto--------------------------
const PORT = 8080
const server = app.listen(PORT,()=>{
    console.log("hola")
})


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

const routerProductos = Router()

routerProductos.put('/:id', (req, res) => {
    const { title, price, thumbnail} = req.body
    
})

app.use('/api/productos', routerProductos)