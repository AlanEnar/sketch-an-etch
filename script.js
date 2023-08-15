const sketchpad = document.getElementById("sketchpad");
let squares = [];
let squareSize = 25;// Dimension of the squares in pixels
let sketchResolution = 16;// Dimension of the overall sketchpad in number of squares

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
    sqr.classList.add("square");
    sketchpad.appendChild(sqr);

}



sketchpad.style.width = squareSize * sketchResolution + "px";// Ensures the right number of squares per row
sketchpad.style.height = squareSize * sketchResolution + "px";
