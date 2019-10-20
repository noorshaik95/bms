require('app-module-path').addPath(__dirname);
let express = require('express');
let config = require('config');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');
let seats = require('utils/initialize-seats').init();
let commonFunctions = require('utils/common-functions');

let app = express();

app.use(bodyParser.json({limit: '5mb'}));

app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

app.use(cookieParser());

app.use(cors());

app.post('/api/allocate/:numberOfSeats', function(req, res) {
   if(Number.isInteger(Number(req.params.numberOfSeats))) {
        let numberOfSeats = Number(req.params.numberOfSeats);
        let result = commonFunctions.reserveSeats(seats, numberOfSeats);
        res.json({success: true, data: result});
   } else {
       res.statusCode = 400;
       res.json({success: false, error: "Invalid Number Format"});
   }
});

app.post('/api/seats/:type/:seats', function(req, res) {
    if(req.params.type.toLowerCase() === 'sold') {
        commonFunctions.changeSeatStatus(req.params.seats, seats, 'S');
    } else if(req.params.type.toLowerCase() === 'available') {
        commonFunctions.changeSeatStatus(req.params.seats, seats, 'A');
    } else {
        res.statusCode = 400;
        return res.json({success: false, error: "Invalid Input"});
    }
    res.json({success: true, data: "Updated"});
});

app.set('port', config.port || 5000);

app.listen(app.get('port'), function () {
    console.log("Server listening on port %d in %s mode", app.get('port'), app.settings.env);
});