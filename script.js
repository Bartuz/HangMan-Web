Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
 }
var words;
var word;
var temp;
var guessed;
var lives;
function newGame(){
	console.log("Setting up variables...");
	words = ["java","ruby","Elvis","jscript","rails","html","css"];
	word = words.randomElement().toUpperCase();
	console.log("Random word is: " + word);
	temp = word.replace(/[a-zA-Z]/g, "_")
	console.log("Temp word is: " + temp)
	guessed = []
	console.log("Array with guessed letter should be length 0 and is: " + guessed.length)
	lives = 8
	console.log("Started game with " + lives + " lives.")
	console.log("Done!");
	updateSite();
}
function drawBoard(){
	console.log("Drawing board....")
	var result = "";
	for (var i=0;i<temp.length;i++){
		result+=(temp[i] + " ");
	}
	$("#status").text("Progress: " + result);
	console.log("DONE!");
}
function updateTempWord(letter){
	console.log("started updteding temp with letter:" + letter)
	for (var i = 0; i < word.length;i++)
		if (word[i]==letter){
			console.log("Got it! " + temp[i] + " will be replaced with "  + letter)
			temp= temp.replaceAt(i,letter);
			console.log(temp);
		}
	console.log("done!")
}
function updateGuessed(letter){
	if ((guessed.indexOf(letter) == -1) && letter!=" ") guessed.push(letter)
}
function drawLives(){
	console.log("Drawing lives...")
	$("#lives").text("You have " + lives + " lives left!");
	console.log("Done!")
}
function drawGuessed(){
	console.log("Drawing guessed...")
	$("#guessed").text("Guessed: " + guessed.join(", "));
	console.log("Done!")
}
function updateSite(){
	$("input").val("");
	drawBoard();
	drawLives();
	drawGuessed();
	debug();
}
function gameStatus(){
	if ((lives<1) || (temp==word)){
		if (temp==word) {
			drawBoard();
			alert("You won! Let's play again :)");
		} else alert("Looser! Word was\n'" + word + "'\nTry again!")
	newGame();
	}
}
function debug(){
	$("#debug").text("words is: " + word + " and was choosen from: '" + words.join("' / '") + "'");
}
$(document).ready(function(){	
	newGame();
	$("input").on("keyup",function(keyPressed){
		if (keyPressed.which == 13) $("button").click(); // 13 = enter/return key. If enter was pressed then we click button!:)
	});
	$("button").on("click",function(){
		console.log("Button event started....");
		var letter = $("input").val().toUpperCase();
		if (letter.length==1){
			if (word.indexOf(letter) != -1){ // index of return index of ("X") inside string. If it doesn't find it return -1.
				console.log("Letter from input is: " + letter);
				updateTempWord(letter);
			} else lives-=1
		updateGuessed(letter);
		gameStatus();
		updateSite();
		}
	});
});