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
            image: e.image ?e.image.url :'null' ,
            longevity: e.life_span?e.life_span:'null',
            temperament: e.temperament? e.temperament.split(',').map((t)=>t.trim()) : 'null',
            height: e.height ?e.height.metric :'null' ,
            weight:e.weight? e.weight.metric: 'null',
            bredfor: e.bred_for ?e.bred_for:'null'
          }
        });
        return promiseInfo;
    }
    catch(error){
        console.log('error in get api info, FunctionsData/ApiDogs.js',error)
    }
}

module.exports = ApiDogs;
