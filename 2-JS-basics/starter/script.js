/************************************
 * Variables and data types
 */

 /*
console.log('Hello World!!!');

var firstName = 'John';
var age = 28;
console.log(firstName);
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
*/


/************************************
 * Variable mutation and type coercion
 */

 /*
var firstName = 'John';
var age = 28; 
// JavaScript automatically turns number into string
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job +
'. Is he maried? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver'

// Wont load page until user presses okay
alert(firstName + ' is a ' + age + ' year old ' + job +
'. Is he maried? ' + isMarried);

// Prompts for data entry
lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
 */


 /*****************************************
  * Basic operators
  */
/*
// Math operators
var year, ageJohn, ageMark;
now = 2019;
ageJohn = now - 28;
ageMark = now - 33;

console.log(ageJohn);

console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// Typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
var x;
console.log(typeof x);
<<<<<<< HEAD
console.log(johnOlder);
*/

/***************************************
 * Operator precedence 
 */
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18; 

// minus sign has precedence over operators
var isfullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var  ageMark = 35; 
var average = (ageJohn + ageMark) / 2;
console(average)

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26 
// x = y =  // this works because assignment operators work right to left 
console.log(x, y);


// More operators
x = x * 2;
x *= 2;

x+= 10; 
x-= 10;
x/= 10;
x++; 
*/
/*********************************
 * Practice problem 1
 */

 /*
var johnH =78, markH = 92, johnM = 1.69, markM = 1.95;

var johnBMI = johnM / (johnH^2);
var markBMI = markM / (markH^2);
console.log(markBMI,johnBMI);

var m = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + m);
*/

/***********************************
 * If / else statements
 */
 /*
var firstName = 'John';
var civilStatus = 'single';
 
var isMarried = true;
if(isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + 'will hopefully marry soon :)');
}
 */

 /*****************************************
  * Boolean logic
  */
 /*
 var firstName = 'John';
 var age = 16;

 if (age < 13) {
   console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) { 
   
 } else {
  console.log(firstName + ' is a man.');
 }
*/

/********************************************
 * The ternary operator and switch statements
 */
/*
 
// ternary operator
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// switch statement 
var job = 'instructor';
switch (job) { 
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + 'cdrives an uber in Chicago');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.')
    break;
  default:
    console.log(firstName + ' does something else.')
}
*/

/***************************************
 * Truthy and Falsy values and equality operators
 */
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: all values NOT falsy 


var height =23; 
if (height || height === 0) {
  console.log('Variable is defined');
} else { 
  console.log('Variable NOT defined');
}
 
//  equality operators
// == compares two values and date types are coerced. types do not have to match
// === strict equality compares type and value 

if (height == '23') {
  console.log('The == operator does type coercion');
}
*/

/******************************************
 * Functions
 */

 /*

function calcAge(birthYear) {
  return 2019 - birthYear;
}

var ageJohn = calcAge(1996);
var ageMark = calcAge(1990);
console.log(ageJohn);
console.log(ageMark);


function yearsUntilRetirement (year, firstName) {
  var age = calcAge(year);
  var retirement = 65 - age;
  if (retirement>0){
   console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1996, 'Jelanah');
*/

/*******************************
 * Function Statements and Expressions
 */
/*
 // Function expression
var whatDoYouDo = function(job, firstName){
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids show to code.';
    case 'driver':
      return firstName + ' drives a cab in Chicago.';
    case 'designer':
      return firstName +' designs beautiful websites.';
    default:
      return firstName + ' does something else.'
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('engineer', 'Jelanah'));

// Expressions produce an immediate result - ex: typeof, 2+3
// Declarations and statements produce nothing unless theyre called. (if/while)
*/

/***********************************************
 * Array
 */
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); // not as common

console.log(names[0]);
console.log(names);
console.log(names.length); // length of array 


names[1] = 'Ben';
names[5] = 'Mary';
console.log(names); // logs ["John", "Ben", "Jane", empty × 2, "Mary"]
names[names.length] = 'Jelanah'; // add at end of array
console.log(names); // logs ["John", "Ben", "Jane", empty × 2, "Mary", "Jelanah"]

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue'); // adds element at end of array
john.unshift('Mr.'); // adds element in  the beginning
john.pop(); // removes element from the end
john.pop();
john.shift() // removes element at the beginning

// indexOf returns 1 if in array and -1 if not
var isDesigner = john.indexOf('designer') === -1 ? ' John is NOT designer' : 'John is a designer';
console.log(isDesigner);
*/

/***********************************
 * Coding challenge 3
 */

/*
var tipArray = [];
var billArray = [];
function  billCalc (bill){
  var tip;
    if (bill < 50){
      tip = bill * .2;
    } else if (bill < 200 &&  bill >= 50){
      tip = bill * .15;
    
    } else {
      tip = bill * .1;
    }
  tipArray.push(tip);
  billArray.push(bill+tip);
  return console.log(tipArray, billArray);
}

*/


/**************************************
 * Objects
 *//* 
var john = {

  firstName: 'John',
  lastName: 'Smith',
  birth: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

// Retreiving elements in an object
console.log(john.firstName); // preferred
console.log(john['lastName']);
var x = 'birth';
console.log(john[x]);

// Mutating objects
john.job = 'designer'; // preferred
john['isMarried'] = true;

// more ways
var jane = new Object ();
jane.firstName = 'Jane';
jane['lastName'] = 'Doe';
jane.birth = 1996;

*/

/**************************************
 * Methods 
 */

 /*

var john = {

  firstName: 'John',
  lastName: 'Smith',
  birth: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2019 - this.birth; //this calls from the current object
  } 
};
john.calcAge();
console.log(john);
*/

/**************************************
 * Coding challenge 4 
 */

 /*
var john = {

  firstName: 'John',
  lastName: 'Smith',
  mass: 87,
  height: 1.75,
  calcBMI:function() {
    this.BMI = this.mass / (this.height^2);
    return this.BMI;
  } 
};

var mark = {

  firstName: 'Mark',
  lastName: 'Walker',
  mass: 85,
  height: 1.7,
  calcBMI: function() {
    this.BMI = this.mass / (this.height^2);
    return this.BMI;
  } 
};

john.calcBMI();
mark.calcBMI();
console.log(john,mark);


if (john.BMI > mark.BMI){
  console.log('John is bigger');
} else if (john.BMI < mark.BMI){
  console.log('Mark is bigger');
} else {
  console.log('John & Mark are equal');
}

*/

/**************************************
 * Loops 
 */

// for (var i=0; i<=20; i+=5) {
//   console.log(i);
// }

var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i=0; i < john.length; i++) {
//   console.log(john[i]);
// }

// var i=0;
// while (i< john.length ) {
//   console.log(john[i]);
//   i++;
// }

for (var i=0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue; // doesnt completely break out
  console.log(john[i]);
}

for (var i=0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break; // breaks out completely
  console.log(john[i]);
}


2dfe39de526cfc94c11d3666c36d6fd4784798bf

