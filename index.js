const container=document.querySelector('.conatiner');
const menuu=document.querySelector('.menu');
const eraser=document.querySelector('.eraser');
const colorPick=document.querySelector('.colorPick');
const size=document.querySelector('.size');
const grid=document.querySelector('.grid');
const colorPicker = document.querySelector("#colorPicker");
const sizeChoose =document.querySelector('#sizeChoose');
let row=30;
let column=30;

let k=0;
let isDrawing = false;
let isErasing = false;

grid.addEventListener('mousedown', () => {
    isDrawing = true;
});

grid.addEventListener('mouseup', () => {
    isDrawing = false;
});

grid.addEventListener('mouseleave', () => {
    isDrawing = false;
});

eraser.addEventListener('click', () => {
    isErasing = !isErasing;
    
});

function draw(row, column) {
    grid.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', () => {
                if (isDrawing || isErasing) {
                    cell.style.backgroundColor = isErasing ? '#FFFFFF' : colorPicker.value;
                }
            });
            cell.addEventListener('mousedown', () => {
                cell.style.backgroundColor = isErasing ? '#FFFFFF' : colorPicker.value;
            });
            grid.appendChild(cell);
        }
    }
}


sizeChoose.addEventListener('change', () => {
  row = sizeChoose.value;
  column = sizeChoose.value;
  grid.innerHTML = '';
  draw(row, column);
});


draw(row,column);

