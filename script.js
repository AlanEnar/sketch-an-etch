
let squares = [];
let squareSize = 50;// Dimension of the squares in pixels

// Fill the squares array with arrays of coordinates for the squares
for (var i = 0; i < 16; i++){
    let x = i * squareSize;
    let y = (i % 4) * squareSize;

    squares.push([x, y]);
}
console.log(squares);


