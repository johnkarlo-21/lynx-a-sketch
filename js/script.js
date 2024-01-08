const CONTAINER_SIDE = 600;
const container = document.querySelector('.container');

container.style.width = `${CONTAINER_SIDE}px`;
container.style.height = `${CONTAINER_SIDE}px`;

let column = 16;
let row = 16;

for(let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add("grid-item");
        gridItem.style.width = `${CONTAINER_SIDE / column}px`;
        gridItem.style.height = `${CONTAINER_SIDE / row}px`;
        container.appendChild(gridItem);
    }
}


    