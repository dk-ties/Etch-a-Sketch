// on load create a sketch
document.body.onload = newGame;

//get Sketch size from selector and store them in var
function getGameSize() {
  gameSize = document.getElementById("language");
  gameSize = Number(gameSize.value);
  let elementsCount = gameSize * gameSize;

  return elementsCount;
}
//get current element used in newgame function
const currentDiv = document.getElementById("content");

function newGame() {
  let elementsCount = getGameSize();
  deleteChild();
  for (let i = 0; i < elementsCount; i++) {
    const element = document.createElement("div");
    element.classList.add("gameGrid");
    currentDiv.setAttribute("id", "gameSize" + elementsCount);
    currentDiv.appendChild(element);
  }
  setEventlistener();
}

//on click newGame set a new game usin the newGame function
document.getElementById("newGamebtn").addEventListener("click", newGame);
//on click reset, set a new game usin the default setting function
document.getElementById("resetGamebtn").addEventListener("click", resetGame);

//on call remove all div inside parrent.
function resetGame() {
  deleteChild();
  console.log("all child removed");
  newGame();
  console.log("new game started");
}

//Function to remove all child
function deleteChild() {
  let first = currentDiv.firstElementChild;
  while (first) {
    first.remove();
    first = currentDiv.firstElementChild;
  }
}

//mouse hover effect

function setEventlistener() {
  Array.from(document.getElementsByClassName("gameGrid")).forEach(function (
    element
  ) {
    element.addEventListener("mouseover", function () {
      this.setAttribute("style", "background-color: black;");
    });
  });
}
