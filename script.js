//Query HTML
const gridContainer = document.querySelector("#grid-container");

//Set grid size
let gridSize = 8;
let spaceSize = 500 / gridSize;

//Create Grid Spaces
for (let i = 0; i < gridSize ** 2; i++) {
    let gridSpace = document.createElement('div');
    gridSpace.setAttribute('class', 'grid-space');
    gridSpace.setAttribute('style', `width: ${spaceSize}px; height: ${spaceSize}px`);
    gridContainer.appendChild(gridSpace);
};

