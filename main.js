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
	return end;
}
console.log(lastLetter("train"));

// 3.
var square = function(number){
	var math = number * number;
	return math;
}
console.log(square(5));

// 4.
var negate = function(number){
	var neg = number * -1;
	return neg;
}
console.log(negate(8));

// 5.
var toArray = function(a,b,c){
	var array = [a, b, c];
	return array;
}
console.log(toArray(1,4,5));

// 6. 
var startsWithA = function(word){
	var firstLetter = word.charAt(0);
	if (firstLetter === 'A') {
		return 'True';
	}
	else {
		return 'False';
	}
}
console.log(startsWithA('Brady'));

// 7.
var excite = function(word){
	return (word + "!!!");
}
console.log(excite('Awesome'));

// 8.
var sun = function(string){
	var str = string.indexOf('sun');
	if (str >= 0) {
		return 'True';
	}
	else {
		return 'False';
	}
}
console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));

// 9.
var tiny = function(number){
	if (number > 0 && number < 1) {
		return 'True';
	}
	else {
		return 'False';
	}
}
console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

// 10.
var getSeconds = function(string){
	var mins = Number( string.slice(0,2) );
	var secs = Number( string.slice(3,5) );
	var total = ( (mins * 60) + secs );
	return total;	
}
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));





















