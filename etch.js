const container = document.querySelector(".container");
const btn = document.getElementsByClassName("new-grid-btn")[0]
btn.addEventListener("click", addnewgrid)

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("flex-child");
    div.textContent = "item #" + i;
    div.addEventListener("mouseenter", () => {div.classList.add("hovered");});
    container.append(div);
}   


function addnewgrid() {
    const container = document.querySelector(".container");

    let input = Number(prompt("please enter length of new grid, 1-100"));
    if (isNaN(input)) {alert("Invalid Number. Please try again.")}
    else if ((input < 1) || (input > 100)) {alert("Number out of range.")} 
    else {
        divList = document.getElementsByClassName("flex-child");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (let i = 0; i < input; i++) {
            const div = document.createElement("div");
            div.classList.add("flex-child");
            div.textContent = "item #" + i;
            div.addEventListener("mouseenter", () => {div.classList.add("hovered");});
            container.append(div);
        }
    }
}