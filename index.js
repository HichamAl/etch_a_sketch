// flex container
const container = document.querySelector("#container");

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.style.backgroundColor = "yellow";
    square.style.border = "thin solid #00FF00";  
    square.style.width = `50px`;
    square.style.height = `50px`;
    container.appendChild(square);

    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = `red`;
    });    
}

// add later, make sure user can only put in a number not a string 
// max of 100 squares also 
const button = document.querySelector("#getGridSize");
button.addEventListener("click", ()=> {
    const squareAmount = prompt("Give a number for the amount of squares");
    let amountOfDivs = squareAmount * squareAmount;

    // remove divs
    const container = document.querySelector("#container");
    for (let i = 0; i < 256; i++){
        const div = container.firstElementChild;
        container.removeChild(div);
    }

    // create new grid
    for (let i = 0; i < amountOfDivs; i++){
        const square = document.createElement("div");
        square.style.backgroundColor = "yellow";
        square.style.border = "thin solid #00FF00";  
        let squareSize = 832 / squareAmount - 2 ;

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square); 

        square.addEventListener("mouseover", ()=>{
            square.style.backgroundColor = `red`;
        });    
    }
    
});



