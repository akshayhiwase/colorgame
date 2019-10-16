var numSquare = 6;
var colors = genrateRandomColor(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor = getColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message")
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numSquare = 4;
    colors = genrateRandomColor(numSquare);
    pickedColor = getColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.background = colors[i];
        }
        else {
            square[i].style.display = "none";
        }
    }
});
hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquare = 6;
    colors = genrateRandomColor(numSquare);
    pickedColor = getColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
        square[i].style.display = "block";
    }
});
reset.addEventListener("click", function () {
    colors = genrateRandomColor(numSquare);
    pickedColor = getColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correct";
            reset.textContent = "Play Again";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = " rgb(54, 50, 50)";
            message.textContent = "Try Again";
        }


    });
}
function changeColor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}
function getColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function genrateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
