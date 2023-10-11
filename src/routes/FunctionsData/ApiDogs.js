const URL = `https://api.thedogapi.com/v1`;
const axios = require('axios');
const apikey = '?api_key=live_M4o91QRzEhehIz0d7uAfvek7XCfsUQYUh9Cow1c39BHgCkzxoZ5o3HnQfwSC2F9j'
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
const ApiDogs = async () => {
    try {
        const promiseApi = await axios.get(URL + '/breeds' + apikey);
        const promiseInfo = await Promise.all(promiseApi.data.map(async (e) => {
            let imgUrl;
            if (e.reference_image_id) {
                const promiseImg = await axios.get(URL + '/images/' + e.reference_image_id + apikey)
                imgUrl = await promiseImg.data.url; // Correct way to access the URL
            }
            return {
                id: e.id,
                name: e.name,
                image: e.reference_image_id ? imgUrl : 'null',
                longevity: e.life_span ? e.life_span : 'null',
                temperament: e.temperament ? e.temperament.split(',').map((t) => t.trim()) : 'null',
                height: e.height ? e.height.metric : 'null',
                weight: e.weight ? e.weight.metric : 'null',
                bredfor: e.bred_for ? e.bred_for : 'null',
            };
        }));
        return promiseInfo;
    }
    catch (error) {
        console.log('error in get api info, FunctionsData/ApiDogs.js', error)
    }
}

module.exports = ApiDogs;
