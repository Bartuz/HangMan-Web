Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};
var words;
var word;
var temp;
(function(){
	console.log("Setting up variables...");
	words = ["java","ruby","c plus plus","jscript","rails","html","css"];
	word = words.randomElement();
	console.log("Random word is: " + word);
	temp = word.replace(/[a-zA-Z]/g, "_")
	console.log("Temp word is: " + temp)
	console.log("Done!");

})();
function board(word){
	var result = ""
	for (var i=0;i<word.length;i++){
		result+=(word[i] + " ")
	}
	return result
}
$(document).ready(function(){	
	$("#debug").text("words is: " + word + " and was choosen from: '" + words.join("' + '") + "'");
	$("#status").text("Progress: " + board(temp))
	$("")
});