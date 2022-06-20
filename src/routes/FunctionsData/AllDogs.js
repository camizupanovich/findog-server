const ApiDogs = require('./ApiDogs');
const DbDogs = require('./DbDogs');

 const AllDogs = async()=>{
        const apiData = await ApiDogs();
        const DbData = await DbDogs();
        const DogsData = apiData.concat(DbData)
        return DogsData;
      }
module.exports= AllDogs;