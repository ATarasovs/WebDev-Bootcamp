var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1display");
var p2Display = document.getElementById("p2display");
var p1Score = 0;
var p2Score = 0;
var reset = document.getElementById("reset");
var result = document.getElementById("result");
var count = document.querySelector('input');
var gameOver = false;
document.querySelector('input').value = result.textContent;

p1Button.addEventListener("click", function() {
    if (!gameOver) {
      p1Score++;
        if(p1Score==result.textContent) {
          p1Display.classList.add("winner");
          gameOver=true;
        }
      p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
      if(p2Score==result.textContent) {
        p2Display.classList.add("winner");
        gameOver=true;
      }
    p2Display.textContent = p2Score;
  }
});

reset.addEventListener("click", function() {
  restart();
});

function restart() {
  p1Score = 0;
  p1Display.textContent = 0;
  p2Score = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

count.addEventListener("change", function() {
  restart();
  result.textContent = count.value;
});
