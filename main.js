/* function newGame {

} */

/*Setting up function to auto insert base row on start up */
/* import { planetVerdant } from "./planetVerdant"; */
document.body.onload = newBase;

//const planetVerdant = ["Verdant", "DW", 300, 150, 3000, "01-01", "02-02"];

const currentDiv = document.getElementById("content");
let elementsCount = 16 * 16;
function newBase() {
  for (let i = 0; i < elementsCount; i++) {
    const element = document.createElement("div");
    element.classList.add("gameGrid");
    currentDiv.appendChild(element);
  }
}
