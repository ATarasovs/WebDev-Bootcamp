var squares = document.querySelectorAll(".square");
var length = 6;
var random = [];
var colors = [];
var pickedColor = Math.floor(Math.random()*length);
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var level = document.querySelectorAll(".level")

window.onload = function() {
   randomSquares();
   buttonClicks();
}

function buttonClicks() {
   for(var i=0; i<level.length; i++)
   {
      level[i].addEventListener("click", function() {
         level[0].classList.remove("selected");
         level[1].classList.remove("selected");
         this.classList.add("selected");

         if (this.textContent=="Easy") {
            length = 3;
            squares[3].classList.add("hide");
            squares[4].classList.add("hide");
            squares[5].classList.add("hide");
         }
         else {
            length = 6;
            squares[3].classList.remove("hide");
            squares[4].classList.remove("hide");
            squares[5].classList.remove("hide");
         }
         resetGame();
      });
   }
   reset.addEventListener("click", function() {
      resetGame();
   });
}

function randomSquares() {
   for (var i=0; i<length; i++) {
      for(var u=0; u<3; u++) {
         random[u] = Math.floor(Math.random()*256);
      }
      colors.push ("rgb(" + random[0] + ", " + random[1] + ", " + random[2] + ")");
      squares[i].style["background-color"] = colors[i];
      squares[i].addEventListener("click", function() {
         var clickedColor = this.style["background-color"];
         if(clickedColor==colors[pickedColor]) {
            message.textContent = "Right!";
            h1.style["background-color"] = clickedColor;
            for (var i=0; i<length;i++) {
               squares[i].style["background-color"] = clickedColor;
            }
            reset.textContent = "Play Again?";
         }
         else {
            this.style["background-color"] = "#232323";
            message.textContent = "Wrong!";
         }
      });
   }
   colorDisplay.textContent = colors[pickedColor];
}

function resetGame() {
   random = [];
   colors = [];
   pickedColor = Math.floor(Math.random()*length);
   randomSquares();
   h1.style["background-color"] = "steelblue";
   message.textContent = "";
   reset.textContent = "New colors";
}
