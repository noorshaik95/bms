const seats = {
    a: [
        { id: 'a1', left: null, right: 'a2', status: 'A', rank: 1 },
        { id: 'a2', left: 'a1', right: 'a3', status: 'A', rank: 2 },
        { id: 'a3', left: 'a2', right: 'a4', status: 'A', rank: 3 },
        { id: 'a4', left: 'a3', right: 'a5', status: 'A', rank: 4 },
        { id: 'a5', left: 'a4', right: 'a6', status: 'A', rank: 5 },
        { id: 'a6', left: 'a5', right: 'a7', status: 'A', rank: 6 },
        { id: 'a7', left: 'a6', right: 'a8', status: 'A', rank: 7 },
        { id: 'a8', left: 'a7', right: 'a9', status: 'A', rank: 8 },
        { id: 'a9', left: 'a8', right: 'a10', status: 'A', rank: 9 },
        { id: 'a10', left: 'a9', right: 'a11', status: 'A', rank: 10 },
        { id: 'a11', left: 'a10', right: 'a12', status: 'A', rank: 11 },
        { id: 'a12', left: 'a11', right: 'a13', status: 'A', rank: 12 },
        { id: 'a13', left: 'a12', right: 'a14', status: 'A', rank: 13 },
        { id: 'a14', left: 'a13', right: 'a15', status: 'A', rank: 14 },
        { id: 'a15', left: 'a14', right: 'a16', status: 'A', rank: 15 },
        { id: 'a16', left: 'a15', right: 'a17', status: 'A', rank: 16 },
        { id: 'a17', left: 'a16', right: 'a18', status: 'A', rank: 17 },
        { id: 'a18', left: 'a17', right: 'a19', status: 'A', rank: 18 },
        { id: 'a19', left: 'a18', right: 'a20', status: 'A', rank: 19 },
        { id: 'a20', left: 'a19', right: null, status: 'A', rank: 20 }
    ],
    b: [
        { id: 'b1', left: null, right: 'b2', status: 'A', rank: 1 },
        { id: 'b2', left: 'b1', right: 'b3', status: 'A', rank: 2 },
        { id: 'b3', left: 'b2', right: 'b4', status: 'A', rank: 3 },
        { id: 'b4', left: 'b3', right: 'b5', status: 'A', rank: 4 },
        { id: 'b5', left: 'b4', right: 'b6', status: 'A', rank: 5 },
        { id: 'b6', left: 'b5', right: 'b7', status: 'A', rank: 6 },
        { id: 'b7', left: 'b6', right: 'b8', status: 'A', rank: 7 },
        { id: 'b8', left: 'b7', right: 'b9', status: 'A', rank: 8 },
        { id: 'b9', left: 'b8', right: 'b10', status: 'A', rank: 9 },
        { id: 'b10', left: 'b9', right: 'b11', status: 'A', rank: 10 },
        { id: 'b11', left: 'b10', right: 'b12', status: 'A', rank: 11 },
        { id: 'b12', left: 'b11', right: 'b13', status: 'A', rank: 12 },
        { id: 'b13', left: 'b12', right: 'b14', status: 'A', rank: 13 },
        { id: 'b14', left: 'b13', right: 'b15', status: 'A', rank: 14 },
        { id: 'b15', left: 'b14', right: 'b16', status: 'A', rank: 15 },
        { id: 'b16', left: 'b15', right: 'b17', status: 'A', rank: 16 },
        { id: 'b17', left: 'b16', right: 'b18', status: 'A', rank: 17 },
        { id: 'b18', left: 'b17', right: 'b19', status: 'A', rank: 18 },
        { id: 'b19', left: 'b18', right: 'b20', status: 'A', rank: 19 },
        { id: 'b20', left: 'b19', right: null, status: 'A', rank: 20 }
    ]
};

module.exports = {
    seats
};
