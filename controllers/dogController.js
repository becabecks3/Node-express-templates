const dogApiData = require('../dogApiFetch/dogApiData');


const getPug = async (req, res) => {
    try{
        let dog = await dogApiData.getRandomPug(req.params.message);
        res.render('mission.pug', {img: dog.message });         
    }
    catch(error){
        console.log(`ERROR: ${error.stack}`);
    }
}

const getLocalPug = (res) => {
    res.render('about.pug', {img2: "./assets/images/nutria2.jpg" });
}

module.exports = {
    getPug,
    getLocalPug
}