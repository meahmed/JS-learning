var numSquares = 6;
var colors = [];
var pickedColor;	
var squares = document.querySelectorAll(".square-block");
var messageDisplay = document.querySelector(".message");
var h1= document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector(".resetButton");
var modeBtns = document.querySelectorAll(".modeBtn");

init();

function init(){
	setModeButtons();
	setSquares();
	resetGame();
};

function setModeButtons(){
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns.forEach(button => {
				button.classList.remove("selected");
			});
			this.classList.add("selected");
			numSquares = this.textContent == "Easy" ? 3 : 6;	
			resetGame();
		});	
	}
	resetButton.addEventListener("click", resetGame);
}

function setSquares(){
	squares.forEach((square) => {
		square.addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if ( clickedColor == pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColor(clickedColor);
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"; 

			}
		});
	});
}



function changeColor(color){
	h1.style.backgroundColor = color;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}

function randomPickColor(num){
	var a = Math.floor(Math.random()*num);
	return colors[a];
}

function resetGame(){
	colors = generateRandomColors(numSquares);
	pickedColor = randomPickColor(numSquares);
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
	 		squares[i].style.display = "block";
	 		squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

}
