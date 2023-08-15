const sketchpad = document.getElementById("sketchpad");
let squares = [];
let squareSize = 50;// Dimension of the squares in pixels
let sketchResolution = 8;// Dimension of the overall sketchpad in number of squares
let squareCount = sketchResolution * sketchResolution;// Number of squares

// Fill the squares array with arrays of coordinates for the squares
for (var i = 0; i < 16; i++){
    let x = i * squareSize;
    let y = (i % 4) * squareSize;

    squares.push([x, y]);
}

// Create the divs needed to fill the pad
for (var i = 0; i < squareCount; i++){
    let sqrCoordinates = squares[i];

    let sqr = document.createElement("div");
    //sqr.classList.add("square");
    sqr.style.width = squareSize + "px";
    sqr.style.height = squareSize + "px";

    sketchpad.appendChild(sqr);
}


// Assign sketchpad dimensions
sketchpad.style.maxWidth = squareSize * sketchResolution + "px";// Ensures the right number of squares per row
sketchpad.style.maxHeight = squareSize * sketchResolution + "px";
