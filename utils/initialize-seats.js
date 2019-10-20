let commonFunctions = require('./common-functions');
let moment = require('moment');
let seats = require('seats').seats;

let newSeats = {};

function init() {
    for(let key in seats) {
        for(let seat of seats[key]) {
            seat.created = moment().toDate();
        }
        newSeats[key] = {
            seats: [...seats[key]],
            unavailableSeats: commonFunctions.getUnavailableSeats(seats[key])
        };
    }
    return newSeats;
}

module.exports = {
    init
};