const game = new Game();

document.getElementById("begin-game").addEventListener("click", function () {
  game.startGame();

  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

document.addEventListener("keydown", function (event) {
  game.handleKeydown(event);
});
