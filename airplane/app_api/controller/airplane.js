var mongoose = require('mongoose');
var ClimbTable = mongoose.model('ClimbTable');
var Flaps5Table = mongoose.model('Flaps5Table');
var Flaps10Table = mongoose.model('Flaps10Table');
var Flaps15Table = mongoose.model('Flaps15Table');
var LandingTable = mongoose.model('LandingTable');
var Airport = mongoose.model('Airport');
var runways = mongoose.model('runways');
var airplanectrl = require('../../app_server/controller/airplane');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}


/* GET a location by the id */
module.exports.airplaneReadOne = function(req, res) {
  console.log('ClimbTable data', req.params);
  if (req.params && req.params.locationid) {
    ClimbTable
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.airplaneReadTwo = function(req, res) {
  console.log('Flaps5Table data', req.params);
  if (req.params && req.params.locationid) {
    Flaps5Table
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.airplaneReadThree = function(req, res) {
  console.log('Flaps10Table data', req.params);
  if (req.params && req.params.locationid) {
    Flaps10Table
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.airplaneReadFour = function(req, res) {
  console.log('Flaps15Table data', req.params);
  if (req.params && req.params.locationid) {
    Flaps15Table
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.airplaneReadFive = function(req, res) {
  console.log('LandingTable data', req.params);
  if (req.params && req.params.locationid) {
    LandingTable
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.Airports = function(req, res) {
  console.log('Airport Data', req.params);
  if (req.params && req.params.locationid) {
    Airport
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.RunwayReadOne = function(req, res) {
  console.log('LandingTable data', req.params);
  if (req.params && req.params.locationid) {
    runways
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};