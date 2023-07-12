const container=document.querySelector('.conatiner');
const menuu=document.querySelector('.menu');
const eraser=document.querySelector('.eraser');
const colorPick=document.querySelector('.colorPick');
const size=document.querySelector('.size');
const grid=document.querySelector('.grid');
const colorPicker = document.querySelector("#colorPicker");

let row=30;
let column=30;

let k=0;
let color='#FFFFFF';
let click=false;
colorPicker.onclick=()=>{
  click=false;
}
function draw(row,column){
    grid.style.gridTemplateColumns = `repeat(${column}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${row}, 1fr)`
  
    for (let i = 0; i < row; i++) {
      for (let j=0;j<column;j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.onclick=()=>{
        if(!click){
        color=colorPicker.value;
        }
      cell.style.backgroundColor=color;
      }
      cell.style.backgroundColor=color;
      cell.setAttribute('id',k);
      grid.appendChild(cell);
      k++;
      }
    }
}
function eraserfunction(){
  click=true;
  color='#FFFFFF'
}
draw(row,column);

