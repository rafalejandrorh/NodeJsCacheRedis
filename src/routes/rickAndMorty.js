const express = require('express');

const APIRickAndMorty = require('../model/APIRickAndMorty');
const { connect } = require('../lib/cache/redis');

const router = express.Router();
const keyRedisCharacter = 'characters';
const keyRedisLocation = 'locations';
const keyRedisEpisode = 'episodes';

router.get('/character', async (req, res) => {
    try {
        const redis = await connect();

        dataRedis = await redis.get(keyRedisCharacter);
        console.log(`Data on Redis: ${dataRedis}`);
        if(dataRedis) {
    
            console.log('Data was obtained to Cache')
            response = res.json(JSON.parse(dataRedis));
        }else{
    
            const responseAPI = await APIRickAndMorty.getCharacters();
            const data = responseAPI.data;
            console.log('Data was obtained to Origin')
        
            await redis.set(keyRedisCharacter, JSON.stringify(data));
            console.log('Data was saved in Cache');
    
            response = res.json(data);
        }

        return response;
    } catch (error) {
        res.status(error.response.status).json({
            message: error.message
        })
    }
});

router.get('/character/:id', async (req, res) => {
    try {
        const redis = await connect();
        const { id } = req.params;
        const keyRedis = `${keyRedisCharacter}-${id}`;
    
        dataRedis = await redis.get(keyRedis);
        console.log(`Data on Redis: ${dataRedis}`);
        if(dataRedis) {
    
            console.log('Data was obtained to Cache')
            response = res.json(JSON.parse(dataRedis));
        }else{
    
            const responseAPI = await APIRickAndMorty.getCharacters(id);
            const data = responseAPI.data;
            console.log('Data was obtained to Origin')
        
            await redis.set(keyRedis, JSON.stringify(data));
            console.log('Data was saved in Cache');
    
            response = res.json(data);
        }
    
        return response;
    } catch (error) {
        res.status(error.response.status).json({
            message: error.message
        })    
    }
});

router.get('/location', async (req, res) => {
    try {
        const redis = await connect();

        dataRedis = await redis.get(keyRedisLocation);
        console.log(`Data on Redis: ${dataRedis}`);
        if(dataRedis) {
    
            console.log('Data was obtained to Cache')
            response = res.json(JSON.parse(dataRedis));
        }else{
    
            const responseAPI = await APIRickAndMorty.getLocations();
            const data = responseAPI.data;
            console.log('Data was obtained to Origin')
        
            await redis.set(keyRedisLocation, JSON.stringify(data));
            console.log('Data was saved in Cache');
    
            response = res.json(data);
        }
    
        return response;
    } catch (error) {
        res.status(error.response.status).json({
            message: error.message
        }) 
    }
});

router.get('/location/:id', async (req, res) => {
    try {
        const redis = await connect();
        const { id } = req.params;
        const keyRedis = `${keyRedisLocation}-${id}`;
    
        dataRedis = await redis.get(keyRedis);
        console.log(`Data on Redis: ${dataRedis}`);
        if(dataRedis) {
    
            console.log('Data was obtained to Cache')
            response = res.json(JSON.parse(dataRedis));
        }else{
    
            const responseAPI = await APIRickAndMorty.getLocations(id);
            const data = responseAPI.data;
            console.log('Data was obtained to Origin')
        
            await redis.set(keyRedis, JSON.stringify(data));
            console.log('Data was saved in Cache');
    
            response = res.json(data);
        }
    
        return response;
    } catch (error) {
        res.status(error.response.status).json({
            message: error.message
        }) 
    }
});

router.get('/episode', async (req, res) => {
    try {
        const redis = await connect();

        dataRedis = await redis.get(keyRedisEpisode);
        console.log(`Data on Redis: ${dataRedis}`);
        if(dataRedis) {
    
            console.log('Data was obtained to Cache')
            response = res.json(JSON.parse(dataRedis));
        }else{
    
            const responseAPI = await APIRickAndMorty.getEpisodes();
            const data = responseAPI.data;
            console.log('Data was obtained to Origin')
        
            await redis.set(keyRedisEpisode, JSON.stringify(data));
            console.log('Data was saved in Cache');
    
            response = res.json(data);
        }
    
        return response;
    } catch (error) {
        res.status(error.response.status).json({
            message: error.message
        }) 
    }
});

router.get('/episode/:id', async (req, res) => {
    try {
        const redis = await connect();
        const { id } = req.params;
        const keyRedis = `${keyRedisEpisode}-${id}`;
    
        dataRedis = await redis.get(keyRedis);
        console.log(`Data on Redis: ${dataRedis}`);
        if(dataRedis) {
    
            console.log('Data was obtained to Cache')
            response = res.json(JSON.parse(dataRedis));
        }else{
    
            const responseAPI = await APIRickAndMorty.getEpisodes(id);
            const data = responseAPI.data;
            console.log('Data was obtained to Origin')
        
            await redis.set(keyRedis, JSON.stringify(data));
            console.log('Data was saved in Cache');
    
            response = res.json(data);
        }
    
        return response;
    } catch (error) {
        res.status(error.response.status).json({
            message: error.message
        }) 
    }
});

module.exports = router;