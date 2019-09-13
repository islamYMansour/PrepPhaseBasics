

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


///Introduction to Variables


 var animal = 'monkey'; 
 var monkey = 'animal'; 
 var x = 15; 
 var y =10; 
 var variable = 'y3ni?'; 
 var isHappend = false; 
 //var isTenEven = 10 % 2 = 0;

var firstName ="Islam"
var lastName = "Mansour"
var middleName = "Yousf"

var fullName = firstName+" "+ middleName+" "+lastName;

var result = 1;
 function counter() { 
 // TODO: your code here 
 return result++;
 } 


//Iteration with the while Loop

function sum(n) { 
 // TODO: your code here 
 var sum=0;
 if(n<=0)
 	return 0;
 for(var i =0 ; i<=n;i++){
 	sum+= i;
 }
 return sum;
} 

function factorial(n) { 
 // TODO: your code here 
 var fact=1;
 if(n<=0)
 	return 1;
 for(var i =n ; i>0;i--){
 	fact*= i;
 }
 return fact;
}

 function repeatString(str, count) { 
 // TODO: your code here 
 var result = ""

 for(var i= 0 ; i<count;i++){
 	result+=str;
 }
 return result;
}

function counting(n) { 
 // TODO: your code here 
 var result = ""

 for(var i= 1 ; i<=n;i++){
 	result+=i;
 	if(n!== i)
 		result+=", "
 }
 return result;
} 

function reverseString(str) { 
       // TODO: your code here 
var reversedStr="";      
var i =str.length-1;
while(i>=0){
	reversedStr += str[i]
	i= i-1;
 } 
 return reversedStr;
}

function countingWhile(n) { 
 // TODO: your code here 
 var result = ""
 var i = 1;
 while(i<=n) {
 	result+=i;
 	if(n!== i)
 		result+=", "
 	i++;
 }
 return result;
} 

//
//Introduction to Arrays

 [ 1, 3 ,4 ,7,9 ] 
 ['the','quick','brown','fox' ,'jumped','over',' the lazy', 'dog' ] 
 var x =[true, false,true]

var favMovies = ["Harry potter","Tangled","Dragons"]
var lovelyPeople = ["Amal","Mahmoud","Diana"]
var sports = ["riding bike","swimming","running"]

var firstElement= favMovies[0];
var lastElement= favMovies[favMovies.length-1];

function firstElementReturn(arrayt){
	return arrayt[0]
}


function lastElementReturn(arrayt){
	return arrayt[arrayt.length-1]
}

var arr = [2, 3, 4]; 

arr.unshift(1)
arr.unshift(0)
arr.push(4)
arr.push(5)
arr.push(6)
arr.push(7)

var arr = [5, 7, 9]; 
var arrPush=arr.push(6); // => length of aaray after addition
var arrShift = arr.unshift(7) // return the length 
var arrPop = arr.pop()

 var animals = ['dog', 'elephant', 'zebra'] 
 animals[0] = 'hippo'; 


 var numbers = [4, 9, 7, 2, 1, 8]; 
 // TODO: your code here 
 numbers[1]=18;
 numbers[2]=14;
 numbers[4]=2

 numbers; // => [4, 18, 14, 2, 2, 8] 


 var places = ['snfranisco', 'oacklannd', 'santacrus'] 
 // TODO: your code here 
 places[0]= 'san francisco'
 places[1]='oacklannd'
 places[2]= 'santa cruz'
 places; // => ['san francisco', 'oakland', 'santa cruz']

var yd =places.slice(1,2)

var numbers = [3, 2,2 ,7, 5,2,2]; 
// var x1= numbers.slice(0); 
// var x2=  numbers.slice(2); 
// var x3= numbers.slice(0, 2);

function remove(elemnt, array){
	for(var i =0; i< array.length;i++){
		if(elemnt===array[i]){
			array.splice(i,1)
			console.log(array.length)
		}
	}
	return array;
}

places.splice(0,2,1);


///Array Iteration with while & for
// sum do it before 

function maxNumber(array){
	var max = 0;
	for(var i =0; i<array.length;i++){
		if(max<array[i]){
		max = array[i]
	     }
     }
	return max;
}

function maxNumberWithWhile(array){
	var max = 0;
	var i = 0;
	while(i<array.length){
		if(max<array[i]){
		max = array[i]
	     }
	     i= i + 1
     }
	return max;
}

 var strSplited1= 'the quick brown fox jumped over the lazy dog';
 var strSplited2='Hello, world!'.split('') 
 var strSplited3='1,2,3,4,5,6'.split(',')


function longestWord(str){
	var splitedWordArray = str.split(' ')
	var longestWord=""
	for(var i=0; i<splitedWordArray.length;i++){
		if(longestWord.length<splitedWordArray[i].length){
			longestWord = splitedWordArray[i];
		}

	}
	return longestWord;
}

function removeAnElement(array , number) {
	var newArray = []
	for(var i =0; i<array.length;i++){
		if(array[i]!==number){
			newArray.push(array[i])
		}
	} 
	return newArray
}

function findEvenNumber(array , number) {
	var newArray = []
	for(var i =0; i<array.length;i++){
		if(array[i]%2===0){
			newArray.push(array[i])
		}
	} 
	return newArray
}

function countAvg(array) {
	var sum =0
	for(var i =0; i<array.length;i++){
		sum+= array[i]
	} 
	return sum/array.length
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
 
 function removeOddValues(obj){
 	var newObj ={}
 	for(key in obj){
 		if(typeof(obj[key])==="number" && obj[key]%2 !==0){
 			newObj[key]= obj[key]
 		}
 	}
 	return newObj;
 }

 function selectObj(obj, keys){
 	var newObj ={}
 	for(var key in obj ){
 		var i = 0
 		while(i < keys.length ){
 			if(keys[i] === key){
 				newObj[key]=obj[key]
 			}
 			i=i+1
 		}
 	}
 	return newObj
 }




 //////Data Modling /////////////////

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
		result+= i+1+". "+ displayBook(books[i])+"\n";
	}
	return result
}

function searchBook(books ,query){
	var result=[]
	for(var i=0 ; i<books.length; i++){
		if(isMatch(books[i],query)){
			result.push( books[i])
		}
	}
	return result
}

function isMatch(book, searchedWord){
	var searchedWord = searchedWord.toLowerCase()
	var title = book.title.toLowerCase().split(' ');
	for(var i=0 ; i< title.length;i++){
		if(title[i].substr(0,searchedWord.length).indexOf(searchedWord)!==-1){
			return true;
		}
	}
	return false;
}

function removeABook(books , bookTitle){
	var newArray =[]
	for(var i =0 ; i< books.length; i++){
		if(books[i].title!== bookTitle){
			newArray.push(books[i])
		}
	}
	return newArray
}






























