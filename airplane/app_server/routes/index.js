var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/airplane');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/climbTable/', ctrlMain.climbTable);
router.get('/Flaps5Table/', ctrlMain.flaps5Table);
router.get('/Flaps10Table/', ctrlMain.flaps10Table);
router.get('/Flaps15Table/', ctrlMain.flaps15Table);
router.get('/LandingTable/', ctrlMain.LandingTable);
router.get('/Airport/', ctrlMain.Airport);
router.get('/runways/', ctrlMain.runways);
module.exports = router;