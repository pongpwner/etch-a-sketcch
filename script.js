const body= document.querySelector('body')
const GRID_WIDTH=16;
const GRID_HEIGHT=16;
let gridArray=[];
//create grid container
let gridContainer= document.createElement('div');
gridContainer.classList.add('grid-container')


//create tile
function createTile(){

    let tile=document.createElement('div')
    tile.classList.add('tile')
    tile.addEventListener('mouseover',()=>tile.classList.add('hovered'))
    return tile;
}

//fill grid-container
for(i=0;i<(GRID_WIDTH*GRID_HEIGHT); i++){
    gridArray.push(createTile())
    gridContainer.appendChild(gridArray[i])
}
body.appendChild(gridContainer)
