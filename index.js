const container = document.querySelector("#container");

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `50px`;
    square.style.height = `50px`;
    container.appendChild(square);

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = rgbValue;
    });    

}

// add later, make sure user can only put in a number not a string 
// max of 100 squares also 
const button = document.querySelector("#getGridSize");
button.addEventListener("click", ()=> {
    let squareAmount;

    do {
        squareAmount = Number(prompt("Input a number between 1-100:"));
    } while (isNaN(squareAmount) || squareAmount < 1 || squareAmount > 100);

    let amountOfDivs = squareAmount * squareAmount;

    // remove divs
    const container = document.querySelector("#container");
    while (container.firstChild) container.removeChild(container.firstChild);

    // create new grid
    for (let i = 0; i < amountOfDivs; i++){
        const square = document.createElement("div");
        square.classList.add("square"); 
        let squareSize = 832 / squareAmount - 2 ;

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square); 

        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let rgbValue = "#" + randomColor;
        square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = rgbValue;
    });      
    }
    
});



