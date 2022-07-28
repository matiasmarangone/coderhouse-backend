const Contenedor = require("./contenedor");

const container = new Contenedor('./prueba.txt')

//container.save({nombre:'Jean', precio: 300})

//container.getById(1);

container.getAll();

//container.deleteById(3);

//container.deleteAll();