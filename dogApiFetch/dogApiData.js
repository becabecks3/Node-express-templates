const fetch = require('node-fetch');

const getRandomPug = async () => {
    try{
        let data = await fetch(`https://dog.ceo/api/breed/pug/images/random`);
        let response = await data.json();
        return response;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getRandomPug
}