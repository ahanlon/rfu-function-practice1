// Function Practice #1


// 1.
var tripleFive = function(){
	for (i = 0; i <3; i++){
		console.log("Five!")
	}
}
tripleFive();

// 2.
var lastLetter = function(word){
	var end = word.charAt( (word['length']) - 1);
	console.log(end);
}
lastLetter("train");

// 3.
var square = function(number){
	var math = number * number;
	console.log(math);
}
square(5);

// 4.
var negate = function(number){
	var neg = number * -1;
	console.log(neg);
}
negate(8);

// 5.
var toArray = function(a,b,c){
	var array = [a, b, c];
	console.log(array);
}
toArray(1,4,5);

// 6. 
var startsWithA = function(word){
	var firstLetter = word.charAt(0);
	if (firstLetter === 'A') {
		console.log('True');
	}
	else {
		console.log('False');
	}
}
startsWithA('Brady');

// 7.
var excite = function(word){
	console.log(word + "!!!");
}
excite('Awesome');

// 8.
var sun = function(string){
	var str = string.indexOf('sun');
	if (str >= 0) {
		console.log('True')
	}
	else {
		console.log('False');
	}
}
sun('sundries');
sun('asunder');
sun('catapult');

// 9.
var tiny = function(number){
	if (number > 0 && number < 1) {
		console.log('True');
	}
	else {
		console.log('False');
	}
}
tiny(0.3);
tiny(14);
tiny(-5);

// 10.
var getSeconds = function(string){
	
}





















