//Query HTML
const gridContainer = document.querySelector("#grid-container");
const startButton = document.querySelector(".submit-button");
const sizeBox = document.querySelector('#grid-size')

//Function to get new grid size on button click
function getVal() {
    let val = sizeBox.value;
    return Number(val);
};

//function to make new grid
function makeGrid(gridSize = 16) {
    //set size of grid spaces to be compatible with total grid size
    let spaceSize = gridContainer.clientWidth / gridSize;
    //create grid spaces
    for (let i = 0; i < gridSize ** 2; i++) {
    const gridSpace = document.createElement('div');
    gridSpace.setAttribute('class', 'grid-space');
    gridSpace.setAttribute('style', `width: ${spaceSize}px; height: ${spaceSize}px`);
    //Add listener to change gridSpace background to black when hovering over
    gridSpace.addEventListener('mouseenter', () => {
        gridSpace.style.backgroundColor = "black";
    });
    gridContainer.appendChild(gridSpace);
}; //end for loop
}; //end makeGrid function


//link submit button to getVal function and make new grid
startButton.addEventListener('click', () => {
    //Remove pre existing grid
    const gridSpace = document.querySelectorAll('.grid-space');
    gridSpace.forEach((currentValue) => {
        currentValue.remove();
    });
    //create new grid with new size
    gridSize = getVal();
    makeGrid(gridSize);
});

makeGrid();


