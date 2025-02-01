console.log(`vw width = ${window.innerWidth}`);
console.log(`vw height = ${window.innerHeight}`);

let calculate_square_size_width = window.innerWidth / 16 - 2;
let calculate_square_size_height = window.innerHeight / 16 - 2;

console.log(`width per square = ${calculate_square_size_width}`);
console.log(`height per square = ${calculate_square_size_height}`);

// flex container
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";

container.style.backgroundColor = "red";
container.style.width = `100vw`;
container.style.height = `100vw`;

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");

    square.style.backgroundColor = "yellow";

    square.style.border = "thin solid #00FF00";  

    square.style.width = `${calculate_square_size_width}px`;
    square.style.height = `${calculate_square_size_height}px`;

    container.appendChild(square);

}


// for (let i = 0; i < 16; i++){
//     const square = document.createElement("div");
//     square.style.backgroundColor = "yellow";
//     square.style.border = "thin solid #00FF00";
//     container.appendChild(square);

//     square.style.width = "20px";
//     square.style.height = "20px";

// };

