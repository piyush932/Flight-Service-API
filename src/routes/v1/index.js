const express = require('express');
const router = express.Router();
const {InfoController, CityController} = require('../../controllers');
const airPlaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');

router.get('/info',InfoController.info);
router.use('/airplanes',airPlaneRoutes);
router.use('/cities',cityRoutes);
router.use('/airports', airportRoutes);


module.exports = router;