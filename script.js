//
// Sketchpad Setup
//
const sketchpad = document.getElementById("sketchpad");
let squaresPerSide = 4;// Number of squares per row
let squareCount = squaresPerSide * squaresPerSide;// Total number of squares
let sketchDimension = 400;// Dimension of the overall sketchpad in pixels
let squareSize = Math.floor(sketchDimension/squaresPerSide);// Number of squares

// Updates squareCount and squareSize
function updateDimensions (){
    squareCount = squaresPerSide * squaresPerSide;
    squareSize = Math.floor(sketchDimension/squaresPerSide);
}

// Assign sketchpad dimensions
sketchpad.style.maxWidth = sketchDimension + "px";// Ensures the right number of squares per row
sketchpad.style.maxHeight = sketchDimension + "px";

// Function to remove all children of an element
function removeChildren (parent){
    while (parent.lastChild){
        parent.removeChild(parent.lastChild);
    }
}

// Populate the sketchpad with squares
function createSketchSquares (){
    removeChildren(sketchpad);// Clear any previous children of the sketchpad
    
    // Create the divs needed to fill the pad
    for (var i = 0; i < squareCount; i++){
        let sqr = document.createElement("div");

        sqr.classList.add("square");
        sqr.style.width = squareSize + "px";
        sqr.style.height = squareSize + "px";

        sketchpad.appendChild(sqr);
    }
};
createSketchSquares();

//
// User Interaction
//

// Mouse interaction
function drawSketch (){
    let sketchpadSquares = document.querySelectorAll(".square");// Nodelist of sketchpad squares

    for (var i = sketchpadSquares.length; i--;){
        let sSqr = sketchpadSquares[i];

        sSqr.addEventListener("mouseover", () => {
            let squareColor = window.getComputedStyle(sSqr).backgroundColor;// Returns a string
            //console.log(squareColor);
            
            sSqr.style.backgroundColor = "rgb(0, 0, 0)"; // This turns the squares black
        });
    }
}

// Button interaction
const sizeButton = document.getElementById("size-button");

function setSketchRes (sps){
    squaresPerSide = sps;// Squares per side is passed when the function is called
    updateDimensions();// Update number of squares and size of squares
    
    // Reset the grid with new square count
    createSketchSquares();
    drawSketch();
}

function changeSketchRes (){
    // Run a new sketchpad with a user-inputed number of squares"
    setSketchRes(prompt("Enter an integer between 1 and 64 to set the resolution for the sketchpad", 10));
}



//
// Run interaction
//

// Initial Setup
setSketchRes(squaresPerSide);// Run the sketchpad with the default number of squares

sizeButton.addEventListener("click", changeSketchRes);// Run the prompt & update pad