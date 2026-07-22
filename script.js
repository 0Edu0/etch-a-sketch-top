const container = document.querySelector('#gridContainer');
const layoutButton = document.querySelector('#layoutButton');

function makeGrid(squareAmount){
    for(let i = 0; i < squareAmount; i++){
        const row = document.createElement('div');
        container.appendChild(row);
        for(let j = 0; j < squareAmount; j++){
            const cell = document.createElement('div');
            row.appendChild(cell);

            cell.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = "red";
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

makeGrid(16);