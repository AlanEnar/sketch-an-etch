//
// Sketchpad Setup
//
const sketchpad = document.getElementById("sketchpad");
const sizeButton = document.getElementById("size-button");
const clearButton = document.getElementById("clear-button");

let squaresPerSide = 6;// Number of squares per row
let squareCount = squaresPerSide * squaresPerSide;// Total number of squares
let sketchDimension = 400;// Dimension of the overall sketchpad in pixels
let squareSize = sketchDimension/squaresPerSide;// Number of squares

// Assign sketchpad dimensions
sketchpad.style.maxWidth = sketchDimension + "px";// Ensures the right number of squares per row
sketchpad.style.maxHeight = sketchDimension + "px";

// Updates squareCount and squareSize
function updateDimensions (){
    squareCount = squaresPerSide * squaresPerSide;
    squareSize = sketchDimension/squaresPerSide;
}

// Removes all children of an element
function removeChildren (parent){
    while (parent.lastChild){
        parent.removeChild(parent.lastChild);
    }
}

// Constrains a value between two limits 
function constrain (value, min, max){
    return value < min ? min : value > max ? max : value;
}

// Populates the sketchpad with squares
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

//
// User Interaction
//

// Mouse interaction
function drawSketch (){
    let sketchpadSquares = document.querySelectorAll(".square");// Nodelist of sketchpad squares

    for (var i = sketchpadSquares.length; i--;){
        let sSqr = sketchpadSquares[i];

        sSqr.addEventListener("mouseover", () => {
            //let squareColor = window.getComputedStyle(sSqr).backgroundColor;// Returns a string
            //console.log(squareColor);
            
            sSqr.style.backgroundColor = "rgb(0, 0, 0)"; // This turns the squares black
        });
    }
}

// Button interaction
function setSketchRes (sps){
    squaresPerSide = sps;// Squares per side is passed when the function is called
    updateDimensions();// Update number of squares and size of squares
    
    // Reset the grid with new square count
    createSketchSquares();
    drawSketch();
}

function changeSketchRes (){
    // Run a new sketchpad with a user-inputed number of squares
    setSketchRes(
        constrain(
            prompt("Enter an integer between 1 and 100 to set the resolution for the sketchpad", 10),
            1, 
            100
        )
    );
}

function clearSketch (){
    let sketchpadSquares = document.querySelectorAll(".square");// Nodelist of sketchpad squares

    for (var i = sketchpadSquares.length; i--;){
        let sSqr = sketchpadSquares[i];

        sSqr.style.backgroundColor = "rgb(255, 255, 255)";// Turn squares white
    }
}

//
// Run interaction
//

// Initial Setup
setSketchRes(squaresPerSide);// Run the sketchpad with the default number of squares

sizeButton.addEventListener("click", changeSketchRes);// Run the prompt & update pad
clearButton.addEventListener("click", clearSketch);// Clear the sketchpad