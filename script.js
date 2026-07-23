const container = document.querySelector('#gridContainer');
const layoutButton = document.querySelector('#layoutButton');
const clearButton = document.querySelector('#clearButton');

function randomColor() { 
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

function makeGrid(squareAmount){
    for(let i = 0; i < squareAmount; i++){
        const row = document.createElement('div');
        container.appendChild(row);
        for(let j = 0; j < squareAmount; j++){
            const cell = document.createElement('div');
            cell.dataset.counter = 0;
            cell.dataset.r = randomColor();
            cell.dataset.g = randomColor();
            cell.dataset.b = randomColor();
            row.appendChild(cell);

            cell.addEventListener('mouseover', (e) => {
                let count = Number(e.target.dataset.counter);
                let r = Number(e.target.dataset.r);
                let g = Number(e.target.dataset.g);
                let b = Number(e.target.dataset.b);
                let factor = Math.max(0, 1 - count / 10);
                cell.dataset.counter = count + 1;
                e.target.style.backgroundColor = `rgb(${r * factor}, ${g * factor}, ${b * factor})`;
            });
        };
    };
};

function deleteGrid(){
    const container = document.querySelector('#gridContainer');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
};


layoutButton.addEventListener('click', (e) => {
    deleteGrid();
    let squares = prompt('Enter the amount of squares. It cannot be less than 0 or more than 100');
    while(squares < 1 || squares > 100){
        squares = prompt('Enter the amount of squares. It cannot be less than 0 or more than 100');
    }

    if(squares <= 100){
        makeGrid(parseInt(squares));
    }
});

clearButton.addEventListener('click', (e) => {
    deleteGrid();
    makeGrid(16);
});

makeGrid(16);