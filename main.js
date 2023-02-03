// on load create a sketch
document.body.onload = newGame;

//get Sketch size from selector and store them in var
gameSize = document.getElementById("language");
gameSize = Number(gameSize.value);
let elementsCount = gameSize * gameSize;

//get current element used in newgame function
const currentDiv = document.getElementById("content");

function newGame() {
  for (let i = 0; i < elementsCount; i++) {
    const element = document.createElement("div");
    element.classList.add("gameGrid");
    currentDiv.appendChild(element);
  }
}

//on click newGame set a new game usin the newGame function
