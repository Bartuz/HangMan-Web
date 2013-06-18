Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};
var words;
var word;
var temp;
(function(){
	console.log("Setting up variables...");
	words = ["java","ruby"];
	word = words.randomElement();
	console.log("Random word is: " + word);
	temp = word
	console.log("Done!");

})();

$(document).ready(function(){	
	$("#status").text("choosen from: " + words.join(" + "));
});