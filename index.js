const container=document.querySelector('.conatiner');
const menuu=document.querySelector('.menu');
const eraser=document.querySelector('.eraser');
const colorPick=document.querySelector('.colorPick');
const size=document.querySelector('.size');
const grid=document.querySelector('.grid');

let row=30;
let column=30;

let k=0;
function draw(row,column){
    grid.style.gridTemplateColumns = `repeat(${column}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${row}, 1fr)`
  
    for (let i = 0; i < row; i++) {
      for (let j=0;j<column;j++){
      const cell = document.createElement('div');
      cell.classList.add('cell')
      cell.setAttribute('id',i);
      grid.appendChild(cell);
      }
    }
}
draw(row,column);
