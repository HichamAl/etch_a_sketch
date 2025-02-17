// flex container
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";

container.style.width = `832px`;
container.style.height = `832px`;

for (let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.style.backgroundColor = "yellow";
    square.style.border = "thin solid #00FF00";  

    square.style.width = `50px`;
    square.style.height = `50px`;

    container.appendChild(square);
}

