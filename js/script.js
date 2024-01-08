const CONTAINER_SIDE = 600;
const container = document.querySelector('.container');
const inputGridNum = document.querySelector('#grid-num-input');
const changeBtn = document.querySelector("#change-btn");
const colorInput = document.querySelector('#change-color-input');
const colorBtn = document.querySelector('#change-color-btn');

container.style.width = `${CONTAINER_SIDE}px`;
container.style.height = `${CONTAINER_SIDE}px`;

function displayGrid(columns = 16, rows = 16, color = "blue") {
    container.innerHTML = "";
    
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add("grid-item");
            gridItem.style.width = `${CONTAINER_SIDE / columns}px`;
            gridItem.style.height = `${CONTAINER_SIDE / rows}px`;
            container.appendChild(gridItem);
            gridItem.addEventListener('mouseover', () => setHoverColor(gridItem, color));
        }
    }
}

const setHoverColor = (gridItem, color) => {
    gridItem.style.backgroundColor = color;
};

displayGrid();

changeBtn.addEventListener('click', () => changeSide(inputGridNum.value));

function changeSide(side) {
    const newSize = parseInt(side);
    
    if (!isNaN(newSize) && newSize > 0) {
        displayGrid(newSize, newSize, "blue");
    } else {
        alert("Please enter a valid positive number for the grid size.");
    }
}

function changeColor(color){
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => setHoverColor(item, color))
    });
}

colorBtn.addEventListener('click', () => changeColor(colorInput.value));