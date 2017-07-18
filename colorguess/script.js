var colors [
            "rgb(255, 0, 0)",
            "rgb(255, 255, 0)",
            "rgb(255, 0, 255)",
            "rgb(0, 0, 0)",
            "rgb(120, 0, 0)",
            "rgb(255, 10, 0)"
          ];
var squares = documen.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
