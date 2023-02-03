/* function newGame {

} */

/*Setting up function to auto insert base row on start up */
/* import { planetVerdant } from "./planetVerdant"; */
document.body.onload = newBase;

//const planetVerdant = ["Verdant", "DW", 300, 150, 3000, "01-01", "02-02"];

gameSize = document.getElementById("language");
console.log(typeof gameSize.value);
gameSize = Number(gameSize.value);
console.log(typeof gameSize);

const currentDiv = document.getElementById("content");
let elementsCount = gameSize * gameSize;
console.log(gameSize);
function newBase() {
  for (let i = 0; i < elementsCount; i++) {
    const element = document.createElement("div");
    element.classList.add("gameGrid");
    currentDiv.appendChild(element);
  }
}
