//
// Sketchpad Setup
//
const sketchpad = document.getElementById("sketchpad");
let squaresPerSide = 4;// Number of squares per row
let squareCount = squaresPerSide * squaresPerSide;// Total number of squares
let sketchDimension = 400;// Dimension of the overall sketchpad in pixels
let squareSize = Math.floor(sketchDimension/squaresPerSide);// Number of squares

// Assign sketchpad dimensions
sketchpad.style.maxWidth = sketchDimension + "px";// Ensures the right number of squares per row
sketchpad.style.maxHeight = sketchDimension + "px";

// Create the divs needed to fill the pad
for (var i = 0; i < squareCount; i++){
    let sqr = document.createElement("div");

    sqr.classList.add("square");
    sqr.style.width = squareSize + "px";
    sqr.style.height = squareSize + "px";

    sketchpad.appendChild(sqr);
}

//
// User Interaction
//

// Mouse interaction
let sketchpadSquares = document.querySelectorAll(".square");// Nodelist of sketchpad squares

for (var i = sketchpadSquares.length; i--;){
    let sSqr = sketchpadSquares[i];

    sSqr.addEventListener("mouseover", () => {
        let squareColor = window.getComputedStyle(sSqr).backgroundColor;// Returns a string
        //console.log(squareColor);
        
        sSqr.style.backgroundColor = "rgb(0, 0, 0)"; // This turns the squares black
    });
}


function mouseOver (){

}

// Button interaction
const sizeButton = document.getElementById("size-button");

function changeSketchRes (){
    let newRes = prompt("Enter an integer between 1 and 64 to set the resolution for the sketchpad", 10);

    squaresPerSide = newRes;
}

sizeButton.addEventListener("click", changeSketchRes);


