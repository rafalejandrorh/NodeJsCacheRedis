const axios = require('axios');

url = 'https://rickandmortyapi.com/api';

async function getCharacters(id = null) {
    endpoint = `${url}/character`;
    if(id) {
        endpoint = `${endpoint}/${id}`;
    }

    const response = await axios.get(endpoint);
    console.log(`API response: ${response.data}`);

    return response;
}

async function getLocations(id = null) {
    endpoint = `${url}/location`;
    if(id) {
        endpoint = `${endpoint}/${id}`;
    }

    const response = await axios.get(endpoint);
    console.log(`API response: ${response.data}`);

    return response;
}

async function getEpisodes(id = null) {
    endpoint = `${url}/episode`;
    if(id) {
        endpoint = `${endpoint}/${id}`;
    }

    const response = await axios.get(endpoint);
    console.log(`API response: ${response.data}`);

    return response;
}

module.exports = {
    getCharacters,
    getLocations,
    getEpisodes
}