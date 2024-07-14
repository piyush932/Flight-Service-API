const express = require('express');
const router = express.Router();
const {InfoController} = require('../../controllers');
const airPlaneRoutes = require('./airplane-routes');

router.get('/info',InfoController.info);
router.use('/airplanes',airPlaneRoutes);

module.exports = router;