const express = require('express');
const router = express.Router();
const {InfoController, CityController} = require('../../controllers');
const airPlaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

router.get('/info',InfoController.info);
router.use('/airplanes',airPlaneRoutes);
router.use('/cities',cityRoutes);


module.exports = router;