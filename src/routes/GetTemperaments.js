const express = require('express');
const {Temperament} =require('../db')
 // traigo la api key que guarde en .env
const URL ='https://api.thedogapi.com/v1/breeds?api_key=live_M4o91QRzEhehIz0d7uAfvek7XCfsUQYUh9Cow1c39BHgCkzxoZ5o3HnQfwSC2F9j';
const axios = require('axios');
const route = express.Router();

route.get('/', async(req,res)=>{
    const ApiTemperaments = await axios.get(URL);
    const temperaments = ApiTemperaments.data.map((t)=> t.temperament).toString().trim().split(/\s*,\s*/) //
    let temperamentsFilter = temperaments.filter((t)=>t);
    const tempsAll = [...new Set (temperamentsFilter)];
    tempsAll.forEach(t=>{
        Temperament.findOrCreate({
            where:{ name: t},
        });
    });
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);
});

module.exports= route;