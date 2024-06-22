const gridSize = 4;

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
        }
    }
}
createGrid();