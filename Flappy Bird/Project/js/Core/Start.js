function startGame() {
  var x = document.getElementById("gameCanvas");
  if (x.className === "game1") {
    x.className = "game2";
  } else {
    x.className = "game1";
  } var y = document.getElementById("startButton");
  if (y.className === "game2") {
    y.className = "game1";
  } else {
    y.className = "game2";
  }
}
