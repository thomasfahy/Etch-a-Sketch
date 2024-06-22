const gridSize = 8;

function createGrid(){
    const mainContainer = document.querySelector(".mainContainer");
    for (let i=0; i < gridSize; i++){
        const containerDiv = document.createElement('div');
        containerDiv.className = "containerDiv";
        mainContainer.appendChild(containerDiv);
        for (let j=0; j < gridSize; j++){
            const gridDiv = document.createElement('div');
            gridDiv.className = "gridDiv";
            containerDiv.appendChild(gridDiv);
            gridDiv.addEventListener("mouseover", () => {
                colorChange(gridDiv);
            })
        }

    }
}
function colorChange(gridDiv){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    gridDiv.style.backgroundColor = ("#" + randomColor);
}




createGrid();