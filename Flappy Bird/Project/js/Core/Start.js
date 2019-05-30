function startGame {
  var x = document.getElementById("gameCanvas");
  if (x.className === "game1") {
    x.className = "game2";
  } else {
    x.className = "game1";
  }
}
