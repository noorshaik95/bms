let config = require('config');
let moment = require('moment');

module.exports = {
    getUnavailableSeats,
    reserveSeats,
    changeSeatStatus
};

function getUnavailableSeats(seats = []) {
    let unavailableSeats = seats.filter((seat) => ['S','R'].indexOf(seat.status) > -1).map((unavailableSeats) => unavailableSeats.rank).sort();
    return unavailableSeats[0] === 0 ? unavailableSeats : [0, ...unavailableSeats, (seats.length + 1)]
}

function bookSeats(block, numberOfSeats) {
    let bookedSeats = [];
    let availableSeats = findAvailableSeats(block.unavailableSeats, numberOfSeats);
    if(!availableSeats.length) {
        return [];
    }
    let count;
    for(let index = (availableSeats[0] === 0 ? 0 : findSeat(block.seats, availableSeats[0])), count = 0; count < numberOfSeats; index++, count++) {
        block.seats[index].status = 'R';
        block.seats[index].created = moment().toDate();
        bookedSeats.push(block.seats[index].id);
    }
    block.unavailableSeats = getUnavailableSeats(block.seats);
    return bookedSeats;
}


function findSeat(seats, rank) {
    for(let index = 0; index < seats.length; index++) {
        if(seats[index].rank === rank) {
            return index + 1;
        }
    }
}

function findAvailableSeats(unavailableSeats, numberOfSeats) {
    if(unavailableSeats.length === 1) {
        return [0];
    }
    for(let index = 1; index < unavailableSeats.length; index++) {
        if(unavailableSeats[index] - unavailableSeats[index - 1] - 1 >= numberOfSeats) {
            return [unavailableSeats[index - 1], unavailableSeats[index]];
        }
    }
    return [];
}

function reserveSeats(seats, numberOfSeats) {
    for(let key in seats) {
        if((seats[key].seats.length - (seats[key].unavailableSeats.length - 2)) >= numberOfSeats) {
            let bookedSeats = bookSeats(seats[key], numberOfSeats);
            if(bookedSeats.length) {
                return bookedSeats;
            }
        }
    }
    return [];
}

function changeSeatStatus(changeSeats, seats, type) {
    let blocksChanged = [];
    changeSeats.split(",").forEach((seat) => {
        let splitSeat = seat.split(/(\d+)/g);
        if(splitSeat[0] && Number.isInteger(Number(splitSeat[1])) && seats.hasOwnProperty(splitSeat[0]) && seats[splitSeat[0]].seats[Number(splitSeat[1])]) {
            if(seats[splitSeat[0]].seats[Number(splitSeat[1]) - 1].status === "R"){
                seats[splitSeat[0]].seats[Number(splitSeat[1]) - 1].status = type;
                blocksChanged.indexOf(splitSeat[0]) === -1 ? blocksChanged.push(splitSeat[0]) : null;
            }
        }
    });
    for(let block of blocksChanged) {
        seats[block].unavailableSeats = getUnavailableSeats(seats[block].seats)
    }
}