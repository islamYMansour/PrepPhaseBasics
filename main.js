

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




///more practice 5-2 



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



// week 2 Higher order functions Islam & Hend



// 1. 
 function cube(x) { 
       return x * x * x; 
 } 

// this is a function expression
var cubeResult = function(x) {
	return x * x * x;
};





 // 2. 
 function fullname(first, last) { 
       return first + ' ' + last; 
 }

// this is a function expression
 var fullNameResult = function(first, last) {
 	return first + ' ' + last;
 };

 // 3. 
 function power(base, exp) { 
       if (exp === 0) { 
       return 1; 
       } 
       return base * power(base, exp - 1); 
 } 
 // 4. 
 function sumCubes(numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }

 function each(coll, func) {
 	if(Array.isArray(coll)){
 		for(var i =0; i< coll.length; i++) {
 			func(coll[i],i);
 		}

 	} else {
 		for (var key in coll){
 			func(coll[key],key)
 		}
 	}
 }

function sumSquares(numbers){
	var total =0;
	each(numbers, function(number){
		total += number * number;
	})
	return total;	
}

function sumCubes(numbers){
	var total = 0;
	each (numbers, function(number){
		total += cube(number); 
	})
	return total;
}

function product1 (numbers){
	var total = 1;
	each(numbers, function(number) {
		total *= number;
	})
	return total;
}


function cubeAll1 (numbers) {
	var result = [];
	each(numbers, function(number) {
		result.push(cube(number));
	})
	return result;
}

function odds1(numbers) {
	var result = [];
	each (numbers, function(number) {
		if (number % 2 !== 0)
			result.push(number)
	})
	return result;
}

function evenIndexedEvenLengths (array) {
	var result = []
	each(array, function(str,i) {
		if(!(str.length %2)  && !(i%2)){
			result.push(array[i])
		}
	})
	return result
}

function values(obj) {
	var result = []
	each(obj,function(value,key){
		result.push(value)
	})
	return result
}

function keys(obj) {
	var result = []
	each(obj,function(value,key){
		result.push(key)
	})
	return result
}

function keysLongerThan(obj,number){
	var result = {}
	each(obj,function(value, key){
		if(key.length>number){
			result[key] = value
		}
	})
	return result
}
// typeof 1;       // => 'number' 

function incrementValues(obj) {
	var result = {};
	each (obj, function(value,key) {
		if (typeof(value) === 'number'){
			result[key] = value + 1;
		} else {
			result[key] = value;
		}			
	})
	return result;
}

function objectToArrayOrArrayToObject(coll) {

}

function oddEvenArray(obj) {
	var resultOdd = [];
	var resultEven = [];
	each(obj, function(value, key) {
		if (value % 2){
			resultOdd.push(value);
		} else {
			resultEven.push(value);
		}
	})
	return resultOdd.concat(resultEven);
}

function isPrime(num) {
	for (var i = 2; i <= num/2; i++) {
		if (num % i === 0){
			return false
		}
	}
	return true
}

function isPimeObj(obj) { 
	var result =[]
	each(obj,function(value,key){ 
		if(isPrime(value)){
			result.push(value)
		}

	})
	return result
}

function map (coll,func){
	var result = []
	if(Array.isArray(coll)){
		each(coll, function(item,i){
		result.push(func(item,i))
		})
	} else {
		var result = {}
		each(coll, function(item,key){
		result[key]=item
		})
	}
	
	return result
}
function fullNameWithMap(array){
	return map(array, function(obj,i){
		return fullNameFormat(obj)
	})
}

function fullNameFormat(obj) {
	var result = ""
			console.log(obj)
	var name = obj['name']
	for(var key in name) {
		result += name[key]+" "
	}
	return result
}

function abs(num){
	if(num<0) {
		return -num
	}
	return num
}

function absArray(array) {
	return map(array, function(item, index) {
		return abs(item)
	})
}

function uppercaseValues(obj){
	return map(obj, function(value,key) {
		if(typeof value === 'string') {
			return value.toUpperCase()
		}
			return value;
		
	})
}


var operateOnNumbers = function (firstNumber, secondNumber, func) {
	return func(firstNumber, secondNumber)
}

//complete the following functions

var addition = function(x, y) {
	return x + y
}

var subtraction = function(x,y){
	return x-y
}

var multiplication =function(x,y){
	return x*y
}

var division =  function(x,y){
	if(y===0){
		return 'Can’t divide by Zero'
	}
	return x/y
}

//improve it later 

function selectKey(obj,keys) {
	var result = {}
	each(obj, function(value, key) {
		for(var i =0; i<keys.length ;i++) {
			if(keys[i] === key){
				result[key] = value
			}
		}
	})
return result

}

function pluck(array , certinKey) {
	var result = []
	each(array , function (item,i) {
		each(item ,function(value,key) {
			if(key === certinKey) {
				result.push(value)
			}
		})
	})
	return result
}

// see if you can use selectKey in the fellow quistion

function extend(destination, source) {
	each(source, function(value, key) {
		destination[key] = value;
	})
	return destination;
}

function zip(keys, values){
	var result = {};
	each(keys, function(item, index) {
		result[item] = values[index];
	})
	return result;
}


function sortAscending(object) {
	var result = values(object).sort(function(a, b) {
  		return a - b;
	});
	console.log(result)
	var output=[];
	each(object, function(value, key) {
		if (value === result[output] ){
			var newObj ={}
			newObj[key]=value
			output.push(newObj)
		}
	})

	return output;
}


/////////////////// clouser/////////


 function makeAccount(initial) {
     var balance = initial;
     return {

          withdraw: function(amount) {
          if (balance - amount >= 0) {
          balance = balance - amount;
          return 'Here’s your money: $' + amount;
     }
     return 'Insufficient funds.';
},
     deposit: function(amount) {
          balance = balance + amount;
          return 'Your balance is: $' + balance;
          }

     };
}

function counter (initial) {
	var count =initial;
	return {
		countUp: function() {
			return ++count;
		},
		countDown: function() {
			return --count;
		},
		reset: function() {
			count = initial;
			return initial;
		}

	}
}

function pow (exp) {
	return function (number) {
		return number ** exp;
	}
}

var square = pow(2);
var cube = pow(3);


function makeStopWatch(){
	var watch={};
	watch.time=0;
	watch.stopId;
	watch.start=start;
	watch.stop=stop;

	return watch;
}

var start= function (){

	var that = this;
	this.stopId=setInterval(function() {
    that.time = that.time + 1;
     console.log('Elapsed time: ' + that.time + 's.');
     }, 1000);
}

function stop() {
   clearInterval(this.stopId);
}

 function Toaster() {
     var instance = {};

     instance.name;
     instance.addToast;

     return instance;
 }


var addToast = function (name) {
	this.name=name;
}

var eject = function () {
	if (typeof this.name === 'undefined') {
		return 
	}
}












function student11 (name , dob, gender,age) {
	student = {}
	
	student['name'] = name
	student['dob'] =dob
	student['gender'] = gender
	student['age'] = age

	return student
}


var std1= student11("Ahmed","15/8/1994","male",25)
var std2= student11("Ali","17/8/1995","male",24)
var std3= student11("Amal","15/1/1996","female",23)
var std4= student11("Doaa","15/6/1994","female",25)
var std5= student11("Sali","18/8/1994","female",25)

var students =[std1,std2,std3,std4,std5]

// function student (obj){
// 	result = []
// 	result.push(obj)
// 	return result
// }

function each (obj,func){
	for(var key in obj){
		return fun(obj ,key)
	}
}

var result = [];



// use the following helper functions in your solution
function eachss(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function filterss(array, predicate) {
	var acc = [];
	eachss(array, function(element, i) {
		if (predicate(element, i)) {
			acc.push(element);
		}
	});
	return acc;
}

function mapss(array, func) {
	var acc = [];
	eachss(array, function(element, i) {
		acc.push(func(element, i));
	});
	return acc;
}


  // Remember to relax :)




//=======================================================================
/*                                  Q1                                 */
//=======================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in one array called computers!
// Note: please write one or two lines here describing your solution.
function makeComputer(type , model) {
    // TODO: Your code here
    return {
    	type : type ,
    	model : model 
    };
}
var comp = makeComputer("sony","1999");
var comp2= makeComputer("mac","2000");
var comps = [comp,comp2];



// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
    // TODO: Your code here
    var res = " ";
    for(var key in computer){
    	res = res + computer[key];
    }
    return res;
}


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function that takes an array of strings as a input,and returns an array 
//of all of those strings, but transformed to upper case. 
//You can use toUpperCase method to convert a string to upper case.
//solve it using the most appropriate helper functions(each,map,filter).
// Note: please write one or two lines here describing your solution.
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]

function uppercaseAll(arrayOfStrings) {
     // TODO: your code here
    return mapss(arrayOfStrings,function(element,index){
     	return element.toUpperCase();

     })

 }


//=============================================================================
/*                                  Q3                                       */
//=============================================================================
//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helperthe helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
{
	country: 'China',
	population: 1409517397,
},
{
	country: 'India',
	population: 1339180127,
},
{
	country: 'USA',
	population: 324459463,
},
{
	country: 'Indonesia',
	population: 263991379,
}
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.


function highestPopulation(arrayOfObjects) {
	// TODO: your code here
	return filterss(arrayOfObjects,function(element,index){
		return element.population > 500000000 ;
	})

}



//=============================================================================
/*                              Q4                                           */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//Note: solve it using the most appropriate helper functions(each,map,filter)
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: please write one or two lines here describing your solution.

function halveAll(numbers) {
	// your code is here
return mapss(arrayOfStrings,function(element,index){
     	return elemnt/2;

     })
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 
// Note: please write one or two lines here describing your solution.

 function values(obj) {
 	// your code is here
 	var result = []
 	each(obj, function(value,key) {
 		result.push(value)
 	})
 	return result
 }

 
/////////  week 4 //////
// <img></img>
// Our img tag doesn't have a src! Add one using jQuery!

$('.image').attr("src","https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_960_720.jpg")


function sortArray(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < Things.length; j++) {
		}
	}
}


function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16,-1,-100,-8,4,0];
bubbleSort(numbers);
console.log(numbers);


function moveZero(array) {
	var x =  filterss(array,function(element, index){
		if(element === 0) {
			array.splice(index,1)
		}
		return element ===0;
	})
	return array.concat(x);
}
 var usersData = [ 
       { user: {email: 'majd@rbk.org', password: '_Majd(2017)'}}, 
       { user: {email: 'fatema@rbk.org', password: '12345'}}, 
       { user: {email: 'maher@rbk.org', password: '_M@her2017'}}, 
              { user: {email: 'maher@rbk.org', password: 'M@her201dfvasef7'}}, 
       { user: {email: 'maher@rbk.org', password: '_M@her2fefwe017'}}, 
       { user: {email: 'maher@rbk.org', password: 'M@herw35352017'}}, 

       { user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
 ]; 
function strongPasswords(array) {
	var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\(\)])(?=.{8,})");
	return filterss(array , function (element,index) {
		console.log(element.user.password)
		return strongRegex.test( element.user.password)
	})	
}















































