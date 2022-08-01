const body= document.querySelector('body')
let GRID_WIDTH=16;
let GRID_HEIGHT=16;
let gridArray=[];

//prompt button
let promptButton= document.createElement('button');
promptButton.innerText='choose grid size'
promptButton.classList.add('prompt-button')
promptButton.addEventListener('click',gridPrompt)
body.appendChild(promptButton)
function gridPrompt(){
    let gridSize=prompt("choose a grid size between 1 and 100")
    console.log(gridSize)
    if(gridSize>100){
        GRID_WIDTH=100;
        GRID_HEIGHT=100;
        removeGrid()
createGrid()
        return
    }
    if(gridSize<1){
        GRID_WIDTH=1;
        GRID_HEIGHT=1;
        removeGrid()
createGrid()
        return
    }
    GRID_WIDTH=gridSize;
 GRID_HEIGHT=gridSize;

removeGrid()
createGrid()
    
}

//button to open modal to control grid size
// let button= document.createElement('button');

// button.innerText='choose grid size'
// button.classList.add('modal-button')
// button.addEventListener('click',openModal)
// body.appendChild(button)
// //create grid container
function createGrid(){
    console.log(GRID_HEIGHT +'x'+GRID_WIDTH)
let gridContainer= document.createElement('div');
gridContainer.classList.add('grid-container')
gridContainer.style.setProperty('grid-template-columns', 'repeat(' + GRID_HEIGHT+ ', 1fr)')
gridContainer.style.setProperty('grid-template-rows', 'repeat(' + GRID_WIDTH+ ', 1fr)')


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
}
createGrid();


//modal
// function openModal(){
 
//     //...
//     let modalContainer=document.createElement('div');
//     //modalContainer.classList.add('modal-container');

//     let closeButton=document.createElement('button')
//     closeButton.classList.add('close-button')
//     closeButton.innerText="X"
//     closeButton.addEventListener('click',()=> modalContainer.remove());

//     let widthLabel=document.createElement('label');
//     widthLabel.innerText="Width";

//     let heightLabel=document.createElement('label');
//     heightLabel.innerHTML='Height'
//     let widthInput=document.createElement('input')
//     widthInput.type='number';
//     widthInput.addEventListener('change', (e)=>setGridWidth(e))
//     let heightInput=document.createElement('input')
//     heightInput.type='number';
//     heightInput.addEventListener('change', (e)=>setGridHeight(e))
//     let createGridButton=document.createElement('button')
//     createGridButton.classList.add('create-grid-button')
//     createGridButton.innerText='Create Grid.'
//     createGridButton.addEventListener('click',()=>{
//         removeGrid();
//         createGrid()});

//     modalContainer.appendChild(closeButton)
//     modalContainer.appendChild(widthLabel)
//     modalContainer.appendChild(widthInput)
//     modalContainer.appendChild(heightLabel)
//     modalContainer.appendChild(heightInput)
//     modalContainer.appendChild(createGridButton)
//     body.appendChild(modalContainer)
// }
// function setGridWidth(e){
//     if(e.target.value>100){
//         alert("number must be between 1 and 100")
//         GRID_WIDTH=100;
//         e.target.value=100;
//         return
//     }
    
//     if(e.target.value<1){
//         GRID_WIDTH=1;
//         e.target.value=1;
//         alert("number must be between 1 and 100")
//         return
//     }
// GRID_WIDTH=e.target.value;
// }
// function setGridHeight(e){
//     if(e.target.value>100){
//         alert("number must be between 1 and 100")
//         GRID_HEIGHT=100;
//         e.target.value=100;
//         return
//     }
    
//     if(e.target.value<1){
//         GRID_HEIGHT=1;
//         e.target.value=1;
//         alert("number must be between 1 and 100")
//         return
//     }
//     GRID_HEIGHT=e.target.value;

// }
function removeGrid(){
    console.log('rem')
    let grid=document.querySelector('.grid-container')
    grid.remove();
}