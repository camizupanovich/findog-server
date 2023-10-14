const {Dog , Temperament} = require('../../db');

const DbDogs = async ()=>{
    let promiseDb = await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ['name'],
            throught: {
                attributes:[],
            }
        }
    });
    return promiseDb;
};
module.exports= DbDogs;