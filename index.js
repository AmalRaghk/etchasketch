const container=document.querySelector('.conatiner');
const menuu=document.querySelector('.menu');
const eraser=document.querySelector('.eraser');
const colorPick=document.querySelector('.colorPick');
const size=document.querySelector('.size');
const grid=document.querySelector('.grid');
let row=30;
let column=30;
let cellSize=Math.min(70/row,70/column);
let cellUnit=''
cellSize=70/row?cellUnit='vw':cellUnit='vh';
let k=0;
function draw(row,column){
    for(let i=0;i<row;i++){
        const rowCell=document.createElement('div');
        rowCell.setAttribute('class','rowCell'+i);
        for(let j=0;j<column;j++){
            const cell=document.createElement('div');
            cell.style.width=cellSize+cellUnit;
            cell.style.height=cellSize+cellUnit;
            cell.setAttribute('class','cell');
            cell.setAttribute('id',k);
            k++
            rowCell.appendChild(cell);
        }
    grid.appendChild(rowCell)

    }
}
draw(row,column);
