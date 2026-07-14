const container = document.querySelector('#gridContainer');

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

makeGrid(16);