const express = require('express');
const dogRoutes = express.Router();
const dogController = require('../controllers/dogController');



dogRoutes.get('/:mission', dogController.getPug);
// dogController.get('/:about', dogController.get);
// dogController.get('/:location', dogController.get);
// dogController.get('/:mission', dogController.get);
// dogController.get('/:contact', dogController.get);


module.exports = dogRoutes;