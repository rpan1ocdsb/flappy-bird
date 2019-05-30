function startGame() {
  var x = document.getElementById("gameCanvas");
  if (x.className === "game1") {
    x.className = "game2";
  } else {
    x.className = "game1";
  } var y = document.getElementById("startButton");
  if (x.className === "game2") {
    x.className = "game1";
  } else {
    x.className = "game2";
  }
}
