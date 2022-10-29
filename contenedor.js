const fs = require('fs');

class Contenedor {
    constructor(route) {
        this.route = route
    }

    async save(obj) {
        try {
            let dataArch = await fs.promises.readFile(this.route, 'utf8');
            let dataArchParse = JSON.parse(dataArch);
            if(dataArchParse.length){
                await fs.promises.writeFile(this.route, JSON.stringify([...dataArchParse, {...obj, id: dataArchParse.length+1}], null, 2))
            }else{
                await fs.promises.writeFile(this.route, JSON.stringify([{...obj, id: dataArchParse.length+1}], null, 2))
            }
            
            return dataArchParse.length+1;
        } catch (error) {
            console.log(error)
        }

    }

    async updateById(obj) {
        try {
            let dataArch = await fs.promises.readFile(this.route, 'utf8');
            let dataArchParse = JSON.parse(dataArch);
            if(dataArchParse.length){
                await fs.promises.writeFile(this.route, JSON.stringify([...dataArchParse, {...obj, id: dataArchParse.length+1}], null, 2))
            }else{
                await fs.promises.writeFile(this.route, JSON.stringify([{...obj, id: dataArchParse.length+1}], null, 2))
            }
            
            return dataArchParse.length+1;
        } catch (error) {
            console.log(error)
        }

    }

    async getById(id){
        try {
            let dataArch = await fs.promises.readFile(this.route, 'utf8');
            let dataArchParse = JSON.parse(dataArch);
            let product = dataArchParse.find(product => product.id === id)
            if (product) {
                //console.log(product)
                return product
            } else {
                return null
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(){
        try {
            let dataArch = await fs.promises.readFile(this.route, 'utf8');
            let dataArchParse = JSON.parse(dataArch);
            console.log(dataArchParse)
            return dataArchParse;
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id){
        try {
            let dataArch = await fs.promises.readFile(this.route, 'utf8');
            let dataArchParse = JSON.parse(dataArch);
            let product = dataArchParse.find(product => product.id === id)
            if (product) {
                let dataArchParseFiltered = dataArchParse.filter(product => product.id !== id)
                await fs.promises.writeFile(this.route, JSON.stringify(dataArchParseFiltered, null, 2))
                console.log('Producto eliminado')
            } else {
                console.log('No existe el producto')
            }

        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll(){
        await fs.promises.writeFile(this.route, JSON.stringify([], null, 2))
    }

}

module.exports = Contenedor;