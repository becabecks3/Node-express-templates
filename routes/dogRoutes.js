const express = require('express');
const dogRoutes = express.Router();
const dogController = require('../controllers/dogController');



dogRoutes.get('/:mission', dogController.getPug);
dogRoutes.get('/:about', dogController.getLocalPug);
dogRoutes.get('/:location', dogController.getPug);
dogRoutes.get('/:mission', dogController.getLocalPug);
dogRoutes.get('/:contact', dogController.getPug);


module.exports = dogRoutes;