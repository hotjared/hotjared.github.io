//Query HTML
const gridContainer = document.querySelector("#grid-container");

//Set grid size
let gridSize = 16;
let spaceSize = gridContainer.clientWidth / gridSize;


//Create Grid Spaces
for (let i = 0; i < gridSize ** 2; i++) {
    const gridSpace = document.createElement('div');
    gridSpace.setAttribute('class', 'grid-space');
    gridSpace.setAttribute('style', `width: ${spaceSize}px; height: ${spaceSize}px`);
    //Add listener to change gridSpace background to black when hovering over
    gridSpace.addEventListener('mouseenter', () => {
        gridSpace.style.backgroundColor = "black";
    });
    gridContainer.appendChild(gridSpace);

};

const gridSpace = document.querySelector(".grid-space");
gridSpace.addEventListener('mouseenter', () => {
    gridSpace.style.backgroundColor = "black";
});


