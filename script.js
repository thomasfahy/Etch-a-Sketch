var gridSize = 0;

function createGrid(size){
    gridSize = size;
    const mainContainer = document.querySelector(".mainContainer");
    for (let i=0; i < gridSize; i++){
        const containerDiv = document.createElement('div');
        containerDiv.className = "containerDiv";
        mainContainer.appendChild(containerDiv);
        for (let j=0; j < gridSize; j++){
            const gridDiv = document.createElement('div');
            let opacityValue = 0.2;
            gridDiv.className = "gridDiv";
            containerDiv.appendChild(gridDiv);
            gridDiv.addEventListener("mouseover", () => {
                colorChange(gridDiv);
                opacityValue = opacityValue + 0.2;
                gridDiv.style.opacity = opacityValue;
            })
        }

    }
}
function colorChange(gridDiv){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    gridDiv.style.backgroundColor = ("#" + randomColor);
}

createGrid(11);

sizeButton = document.querySelector(".submitSize");

sizeButton.addEventListener("click", () => {
    console.log("button press");
    var newGridSize = document.getElementById("newGridSize");
    console.log(newGridSize);
    if (newGridSize <= 100 && newGridSize > 1){
        mainContainer.replaceChildren('');
        createGrid(newGridSize);
    }
    else{
        alert("Must be a value larger than 1 and less than 100");
    }

})