var mongoose = require('mongoose');

var ClimbTable = new mongoose.Schema ({
	weight: Number,
	VFRIFlap5: Number,
	VFRIFlap10: Number,
	VFRIFlap15: Number,
	VCLMB: Number
});

var flaps5Table = new mongoose.Schema({
  temperature: String,
  weight:Number,
  altitude:{Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
            Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
            Number:{Vr:Number,V1:Number}}
});

var flaps10Table = new mongoose.Schema({
  temperature: String,
  weight:Number,
  altitude:{Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
            Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
            Number:{Vr:Number,V1:Number}}
});

var flaps15Table = new mongoose.Schema({
  temperature: String,
  weight:Number,
  altitude:{Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
            Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
            Number:{Vr:Number,V1:Number}}
});

var landingTable = mongoose.Schema ({
	flap: Number,
	weight: Number,
	Vapp: Number,
	Vref: Number,
	Vga: Number
});

var airport = new mongoose.Schema({
    Airport: String,
    IATA: String,
    ICAO: String,
    runway: [runways]
});

var runways = new mongoose.Schema({
    Heading: String,
    Length: String
});

mongoose.model('ClimbTable', ClimbTable, 'climbTable')

mongoose.model('Flaps5Table', flaps5Table, 'flaps5Table')

mongoose.model('Flaps10Table', flaps10Table, 'flaps10Table')

mongoose.model('Flaps15Table', flaps15Table, 'flaps15Table')

mongoose.model('LandingTable', landingTable, 'landingTable')

mongoose.model('Airport', airport, 'airport')

mongoose.model('Runways', runways, 'runways')