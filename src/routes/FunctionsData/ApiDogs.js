const URL = `https://api.thedogapi.com/v1`;
const axios = require('axios');
const apikey = '?api_key=live_M4o91QRzEhehIz0d7uAfvek7XCfsUQYUh9Cow1c39BHgCkzxoZ5o3HnQfwSC2F9j'
const ApiDogs = async () => {
    try {
        const promiseApi = await axios.get(URL + '/breeds' + apikey);
        const promiseInfo = await Promise.all(promiseApi.data.map(async (e) => {
            return {
                id: e.id,
                name: e.name,
                image: e.image&&e.image.url ?e.image.url : 'null',
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
