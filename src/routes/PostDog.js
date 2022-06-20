/* [ ] POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos */
const express = require('express');
const route = express.Router();
const {Dog , Temperament} = require('../db')

route.post('/',async(req,res)=>{
    let{   //del form
        name,
        image,
        temperaments,
        longevity,
        minW,
        maxW,
        minH,
        maxH
    }= req.body;
    try{
        let newDog = await Dog.create({
            name:name,
            image:image,
            weight:minW+" - "+maxW,
            height:minH+" - "+maxH,
            longevity:longevity+'years'
        });
        let allTemps = temperaments.map(t=>t.charAt(0).toUpperCase().concat(t.slice(1)));
        let temperamentDb = await Temperament.findAll({
            where:{
                name: allTemps
            },
        })
        newDog.addTemperament(temperamentDb);
        return res.status(200).send({message:'Dog created successfully !'});
    } catch(err){
        res.status(400).send(err);
    }
});



module.exports= route;