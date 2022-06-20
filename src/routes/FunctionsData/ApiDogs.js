const {API_KEY} = process.env; // traigo la api key que guarde en .env
const URL =`https://api.thedogapi.com/v1/breeds`;
const axios = require('axios');

//en el json las medidas son 
/* {
    weight:{  ///
    imperial:"9 - 31"
    metric:"4 - 14"   ----
    }
    height:{
    imperial:"10 - 23"
    metric:"25 - 58"
    } */    
const ApiDogs = async()=>{
    try{
        const promiseApi = await axios.get(URL);
       const promiseInfo = await promiseApi.data.map((e)=>{
          return{
            id: e.id,
            name: e.name,
            image: e.image.url,
            longevity: e.life_span,
            temperament: e.temperament && e.temperament.split(',').map((t)=>t.trim()),
            height: e.height.metric ,
            weight:e.weight.metric,
            bredfor: e.bred_for
          }
        });
        return promiseInfo;
    }
    catch(error){
        console.log('error in get api info, FunctionsData/ApiDogs.js',error)
    }
}

module.exports = ApiDogs;
