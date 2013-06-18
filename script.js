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
(function(){
	console.log("Setting up variables...");
	words = ["java","ruby","c plus plus","jscript","rails","html","css"];
	word = words.randomElement();
	console.log("Random word is: " + word);
	temp = word.replace(/[a-zA-Z]/g, "_")
	console.log("Temp word is: " + temp)
	guessed = ["e","a","b","d"]
	console.log("Array with guessed letter should be length 0 and is: " + guessed.length)
	lives = 8
	console.log("Started game with " + lives + " lives.")
	console.log("Done!");
})();
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
	for (var i = 0; i < word.length;i++){
		if (word[i]==letter){
			console.log("Got it! " + temp[i] + " will be replaced with "  + letter)
			temp= temp.replaceAt(i,letter);
			console.log(temp);
		}
	}
	console.log("done!")
	drawBoard()
}
$(document).ready(function(){	
	$("#debug").text("words is: " + word + " and was choosen from: '" + words.join("' / '") + "'");
	drawBoard();
	$("#lives").text("You have " + lives + " lives left!");
	$("#guessed").text("Guessed: " + guessed.join(", "));
	$("input").on("keyup",function(keyPressed){
		console.log(keyPressed)
	});
	$("button").on("click",function(){
		console.log("Button event started....");
		var letter = $("input").val();
		console.log("Letter from input is: " + letter);
		updateTempWord(letter);
		$("input").val("");
	});
});