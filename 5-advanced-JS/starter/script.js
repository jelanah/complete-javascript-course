/*************************************
 * Advanced Objects
 */
/*
// inefficent, non reusable way
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


// Function constructor 
// Names are always written with a captial letter first
var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

var john = new Person ('John', 1990, 'teacher');

var jane = new Person ('Jane', 1996, 'designer');

var mark = new Person ('Jane', 1963, 'retired');
////// How this works
// 1. When we use the "new" operator, it creates and empty object
// 2. Person function is called
// 3. Points .this to the new empty object (not the global definitions)
// 4. Emmpty object now has the properties that we passed through and assigned
// 5. Now the object points to the new variable "John"



// All functions using Person can access this prototype
// This is called inheritance
Person.prototype.calculateAge = function() {
        console.log( 2019 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';

*/




/*********************************
 * Object.create
 */
// the first way is better (shown above)

/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;


var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1990}
});
*/


/*********************************
 * Primitives vs Objects
 */

/*

 // variables hold their own copy of their value

 var a = 23;
 var b = a;
 a = 46 
 // b is still 23


var obj1 = {
    name: 'John',
    age: 23
};

var obj2 = obj1;

obj1.age = 72;
// now both obj 1 and obj 2 have the age 72.
// when you initiate obj2, youre assigning obj2 to the reference of obj 1
// therefore, any changes made to one, will be made to both

// passing an object through a function, will change the object as well.
// when you pass an object through a function, you are passing the reference
// variables will not change globally, but the objects will.
var age = 23;
var obj = {
    name: 'Jelanah',
    city: 'Los Angeles'
};
function changeTest(a,b) {
    a = 30;
    b.city = 'Columbus';
};

changeTest(a,b);
// the variable will still be 30 bc premitives do not change within functions
// the object will show the city as "Columbus" because objects are affected inside functions

*/

/*************************************
 *  Passing functions as arguments 
 */
/*
var years = [ 1990, 1965, 1937, 2013, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (i = 0; i < arr.length; i ++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}


function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return  el >= 18;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges);
*/


/******************************
 * Functions returning functions
 */

 /*

function interviewQuestion(job) {
    if (job === 'designer') {;
        return function(name) {
            console.log (name + ', can you please explain what UX dsign is?')
        };
    } else if (job=== 'teacher') { 
        return function(name) {
            console.log(name + ', what\'s your favorite subject?')
        };
    } else {
        return function(name) { 
            console.log('Hello, ' + name + ', what do you do?')
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
interviewQuestion('teacher')('Mark'); 
*/

/********************************
 *  IIFE
 * Immediately Invoked Function Expression
 * Helps with data privacy
 */
/*
// long way
function game () {
     var score = Math.random() * 10;
     console.log(score>=5);
 }
 game();

// IIFE way
// tricks JavaScript to thinking that this function is an expression by wrapping 
// it into parenthis. Then invokes it with () at the end
(function game () {
    var score = Math.random() * 10;
    console.log(score>=5);
})();

// console.log(score); // score is not defined

// You can still pass arguments
// add in some good luck that will make the result always true
(function game (goodluck) {
    var score = Math.random() * 10;
    console.log(score>=5)- goodluck;
})(5); 
*/

