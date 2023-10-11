/* [ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados */
/* GET /dogs:
Obtener un listado de las razas de perro
Debe devolver solo los datos necesarios para la ruta principal */
/* ] GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado */

const express = require('express');
const route = express.Router();

const AllDogs = require('./FunctionsData/AllDogs');




route.get('/', async (req,res) =>{
    try{
        const name = req.query.name;
        let Dogs = await AllDogs(); // traigotodos
        if(name){  // getdogsname
            let dogName = await Dogs.filter((e)=>
            e.name.toLowerCase().includes(name.toLowerCase()));
        if(dogName.length) return res.status(200).send(dogName);
        return res.status(404).send('Dogs Not Found');
        }else{
            res.status(200).send(Dogs) //get dogs
        }
    }catch(error){
        console.log('error in get name and all dogs routes/GetDogs.js' , error)
        return res.status(400).json(error)
    }
});

route.get('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
      let Dogs = await AllDogs();
      dogId = await Dogs.filter(e=> e.id.toString() === id);
      return res.status(200).send(dogId)
    }catch{
       res.status(400).send('something went wrong')
    }
})

module.exports = route;