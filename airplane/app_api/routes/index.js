var express = require('express');
var router = express.Router();
var airplanectrl = require('../controller/airplane');

/* Locations */
router.get('/ClimbTable/:ClimbTableID', airplanectrl.airplaneReadOne);
router.get('/Flaps5Table/:Flaps5TableID', airplanectrl.airplaneReadTwo);
router.get('/Flaps10Table/:Flaps10TableID', airplanectrl.airplaneReadThree);
router.get('/Flaps15Table/:Flaps15TableID', airplanectrl.airplaneReadFour);
router.get('/LandingTable/:LandingTableID', airplanectrl.airplaneReadFive);
router.get('/Airport/:AirportID', airplanectrl.airport);
router.get('/Runways/:RunwaysID', airplanectrl.RunwayReadOne);
module.exports = router;
