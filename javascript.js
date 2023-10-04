let gridContainer = document.querySelector('.container');
let size = 8
gridContainer.style.gridTemplateColumns = `repeat(auto-fill, 12.5%)`

for (i = 0; i < 8; i ++) {
    let square = document.createElement('div')
    square.innerText = ("for loop (i)") //sample text. remove when done
    gridContainer.appendChild(square).className = "grid-item";
    for (j = 0; j < 7; j++) {
        let square = document.createElement('div')
        square.innerText = ("for loop (j)") //sample text. remove when done
        gridContainer.appendChild(square).className = "grid-item";
    }
}

const gridPattern = document.querySelectorAll('gridItem')

gridPattern.forEach(mouseHover => {
    mouseHover.addEventListener('hover', () => {
        gridContainer.style.background = `red`
    })
})
