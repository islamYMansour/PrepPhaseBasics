function square(monkey) {
  return monkey* monkey;
}

function square(x){
	return x * x; 
} 
function square (x) {
	return x * x; 
} 
function square(x){ 
 return x * x; 
}
function cube(x) { 
 // your code here 
 return x * x * x;
}

 //don't forget the parameters! 
 function fullName(firstName, lastName) { 
 // your code here 
 	return firstName +" "+ lastName ;
 } 
function avarge(num1, num2){
	return(num1+num2)/2;
}
function greeter(name){
	return "Hello "+ name+"!";
}
function areaSqaure(side){
	return side * side;
}
function perimeterSquare(side) {
	return 4 * side;
}
function oldEnoughToDrive(age){
	if(age>16){
		return true;
	}
	return false;
}
function sameLength(str1, str2) {
	if(str1.length === str2.length){
		return true;
	}
	return false;
}

function passwordLongEnough(password) {
	if(password.length>8){
		return true;
	}
	return false;
}
function rentalCar(name ,age){
	if(age >= 21){
		return "have Fun driving!"
	}
	return "You cant have key."
}

function max(num1,num2){
	if(num1>num2){
		return num1;
	}
	return num2;
}

function min(num1,num2){
	if(num1<num2){
		return num1;
	}
	return num2;
}

//
//
// repetetion
//
//

function sum(n){
	if(n<=0){
		return 0
	}
	return n+sum(n-1)

}

 function factorial(n) { 
 // TODO: your code here 
 if(n<=0){
		return 1
	}
	return n*factorial(n-1)

 } 


 function repeatString(str,repetetionTimes) { 
 // TODO: your code here 
 if(repetetionTimes<=0){
 	return str
 }
return str+repeatString(str,repetetionTimes-1)
} 

function fib(n){
	if(n===0){
		return 0
	}
	else if( n===1){
		return 1;
	}
	return fib(n-1) + fib(n-2)
}

function multiplyBy10(number, n) {
	if(n < 0)
		return 0;
	else if(n===0)
		return number;
	return 10 * multiplyBy10(number,n-1)
}

 function sumStartEnd(start, end) { 
 // TODO: your code here 
 if(start < end)
 	return 0;
 return start +sumStartEnd(start-1,end)
 } 

 function sumStartEndUp(start, end) { 
 // TODO: your code here 
 if(start > end)
 	return 0;
 return start +sumStartEndUp(start+1,end)
 } 
























//
//
// objects
//
//

var obj1 = {
	firstName: 'Yan',
 	lastname: 'Fan'
 } 

 var obj2= {
 	a: 1,
 	b: 2,
 	c: 3,
 	d: 4
 } 
 
 var obj3= { 
       animal: 'dog', 
       noise: 'bark', 
       age: 3, 
       type: 'Golden Retriever', 
       color: 'Yellow'
 }

var person1= {
	firstName: "Islam",
	lastName: "Mansouur",
	age: 24,
	homeTown: "Gaza"
}
var person2= {
	firstName: "Islam",
	lastName: "Mansouur",
	age: 24,
	homeTown: "Gaza",
	family: "Mansour",
	dob: "15,Feb 2019",
	placeOfBirth: "Gaza"
}

var person3= {
	name: {
		firstName:"Islam",
		middleName:"Yousf",
		lastName: "Mansour"
	},
	age: 24,
	homeTown: "Gaza",
	family: "Mansour",
	dob: "15,Feb 2019",
	placeOfBirth: "Gaza"
}
var product ={
	ItemName : "moon lamp",
 	Category_Type : "generic",
 	YearReleased :2016,
 	Rating :1.0,
 	Price :20
}
person1.colorName= "Simon";


var key = 'name'; 
 var woman = { 
       name: 'Grace Hopper', 
       age: 85, 
       occupation: 'computer scientist' 
 }; 
 woman['age']; // => 85 
 woman[key]; // => 'Grace Hopper' 
 woman['occupation'] // => ???

 function formatName (person) {
 	return person.name['firstName']+" "+
 	person.name['middleName']+" "+person.name['lastName']
 }

var person4 = {
	name: {first: 'Islam', middle: 'Y.', last: 'Mansour'}, age: 24
}

var people = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ];
people.push(person4)

 function formatName2 (person) {
 	return person.name['first']+" "+
 	person.name['middle']+" "+person.name['last']
 }

function displayAll(people) {
	var allNames = "";
	for(var i =0 ; i<people.length ; i++){
		allNames += formatName2(people[i])
	}
	return allNames;
}

function ageAvg(people) {
	var sum = 0;
	for(var i =0; i< people.length; i++){
		sum += people[i].age;
	}
	return sum/people.length;

}
function findOlder(people ,age) {
	var result = [];

	for (var i = 0; i < people.length; i++) {
		if(people[i].age > age){
			result.push(people[i])
		}
	}
	return result;
}

 var dirtyObject = { 
       _fht: 192492, 
       name: 'Yan Fan', 
       age: 27, 
       _byz: 939205, 
       _ttrs: 510852 
 }

function clean(dirtyObj) {
	var cleanedObj = {}
	for (var key in dirtyObj){
		if(key.indexOf('_')!==0){
			cleanedObj[key]=(dirtyObj[key])
		}
	}
	return cleanedObj;
}
 
function cleanByStart(dirtyObj) {
	var cleanedObj = {}
	for (var key in dirtyObj){
		if(!key.startsWith('_')){
			cleanedObj[key]=(dirtyObj[key])
		}
	}
	return cleanedObj;
}
 

var book = {
	title : "Alis in wonder Land",
 	auther :["me"],
 	MSRP : 123656,
 	genare : "novel",
 	numberOfPages : 400,
	description: "its a novel talk about imaganation story"
}

function makeBook(title,auther,MSRP,genare,numberOfPages,description){
	return {
		title : title,
 		auther :auther,
 		MSRP : MSRP,
 		genre : genare,
 		numberOfPages : numberOfPages,
		description: description

	}

}
var book1 = makeBook("Harry Potter and the Sorcerer's Stone",["J.K. Rowling"],200,"Noval",100,"antyhing");
var book2 = makeBook("Romeo and Juliet",["William Shakespeare"],200,"Noval",100,"antyhing");
var book3 = makeBook("Structure and Interpretation of Computer Programs",["Gerald Jay Sussman", "Hal Abelson"],200,"Noval",100,"antyhing");



function displayBook(book){
	return book.title + " " + book.description;
}
var books = [book1,book2,book3]


function displayBooks(books){
	var result=""
	for(var i = 0 ; i < books.length; i++){
		result+= displayBook(book[i])+"\n";
	}
}































