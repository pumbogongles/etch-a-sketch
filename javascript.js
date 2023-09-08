let gridContainer = document.querySelector('.container');
gridContainer.style.gridTemplateColumns = 'repeat(16, lir)'

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const cells = document.createElement('div');
        cells.classList.add('cell')
    }
}