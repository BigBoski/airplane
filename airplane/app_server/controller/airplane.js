var airplanectrl = require('../../app_api/controller/airplane');

module.exports.index = function(req, res){
  res.render('index', { title: "Tables For Flying" }
)};
module.exports.climbTable = function(req, res){
  airplanectrl.ClimbTable(req, res);
};
module.exports.flaps5Table = function(req, res){
  airplanectrl.Flaps5Table(req, res);
};
module.exports.flaps10Table = function(req, res){
  airplanectrl.Flaps10Table(req, res);
};
module.exports.flaps15Table = function(req, res){
  airplanectrl.Flaps15Table(req, res);
};
module.exports.LandingTable = function(req, res){
  airplanectrl.LandingTable(req, res);
};
module.exports.Airport = function(req, res){
  airplanectrl.Airport(req, res);
};
module.exports.runways = function(req, res){
  airplanectrl.runways(req, res);
};

module.exports.renderToJadeOne = function(res, content){
    res.render('ClimbTable', { table: content });
};
module.exports.renderToJadeTwo = function(res, content){
    res.render('FlapsTable', { table: content });
};
module.exports.renderToJadeThree = function(res, content){
    res.render('LandingTable', { table: content });
};