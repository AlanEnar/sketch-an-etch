//
// Sketchpad Setup
//
const sketchpad = document.getElementById("sketchpad");
let squaresPerSide = 4;// Number of squares per row
let squareCount = squaresPerSide * squaresPerSide;// Total number of squares
let sketchDimension = 400;// Dimension of the overall sketchpad in pixels
let squareSize = Math.floor(sketchDimension/squaresPerSide);// Number of squares

// Create the divs needed to fill the pad
for (var i = 0; i < squareCount; i++){
    let sqr = document.createElement("div");

    sqr.classList.add("square");
    sqr.style.width = squareSize + "px";
    sqr.style.height = squareSize + "px";

    sketchpad.appendChild(sqr);
}


// Assign sketchpad dimensions
sketchpad.style.maxWidth = sketchDimension + "px";// Ensures the right number of squares per row
sketchpad.style.maxHeight = sketchDimension + "px";

//
// User Interaction
//
let sketchpadSquares = document.querySelectorAll(".square");// Nodelist of sketchpad squares

for (var i = sketchpadSquares.length; i--;){
    let sSqr = sketchpadSquares[i];

    sSqr.addEventListener("mouseover", () => {
        let squareStyle = window.getComputedStyle(sSqr);
        //console.log(squareStyle.backgroundColor);
        //sSqr.style.backgroundColor = "rgb(10, 10, 10)"; // This turns the squares black
    });
}


function mouseOver (){

}


//sketchpad.addEventListener("mouseover", mouseOver);