const sketchpad = document.getElementById("sketchpad");
let squares = [];
let squareSize = 50;// Dimension of the squares in pixels
let sketchResolution = 4;// Dimension of the overall sketchpad in number of squares

sketchpad.style.width = squareSize * sketchResolution;// Ensures the right number of squares per row

// Fill the squares array with arrays of coordinates for the squares
for (var i = 0; i < 16; i++){
    let x = i * squareSize;
    let y = (i % 4) * squareSize;

    squares.push([x, y]);
}

// Create divs using the coordinates in the squares array
for (var i = 0; i < squares.length; i++){
    let sqrCoordinates = squares[i];

    let sqr = document.createElement("div");
    console.log(sqr);
    sqr.style.width = squareSize;
    sqr.style.height = squareSize;

    sketchpad.appendChild(sqr);
}

