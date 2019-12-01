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
    };

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

/***************************************
* Closures
*/
/*
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2018-yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}
var retirementGermany = retirement(60);
var retirementUS = retirement(66);
retirementUS(1990);

// or 
retirement(66)(1990);
*/

////// Closure Summary
// An inner function always has ac cess to the variables and parameters
// of its outer function, even after the outer function returned.


////// Rewriting interview function using closures
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer'){
            console.log (name + ', can you please explain what UX dsign is?');
        } else if (job === 'teacher'){ 
            console.log (name + ', what do you want to teach?');
        } else { 
            console.log (name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

/**************************************
 * Bind, call and apply
 */
/*
var john = {
    name: 'John', 
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfday) {
        if (style === 'formal') {
            console.log('Good ' + timeOfday + ', Ladies and Gents.'
            + ' I\'m ' + this.name + '. I am a ' +
            this.job +'.');
        } else if (style === 'friendly'){
            console.log('Hey, what\'s up. My name is ' + this.name +
            ' and I am a ' + this.job + '. Have a nice ' + timeOfday +'!');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

///////// Call
// We can use the call method to utilize another object's method.
// Use John to call the 'presentation' method for Emily.
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

///////// Apply 
// Apply is the same as call except we use an array to pass the arguments instead

//  john.presentation.apply(emily, ['friendly', 'afternoon']); // wont work because function 
// isnt expecting an array.


////////// Bind 
// Generates a copy of the function
// saving a fuction based on another function to store preset arguments is 'currying'
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');

*/


/***************************************
 *  Coding Challenge 7 
 */

 /*

(function game () {
Question = function (question, options, correct) {
    this.question= question;
    this.options = options;
    this.correct = correct; 
    // this.ask = function(this.question,this.options) {
    //     console.log(this.question);
    //     for (i=0; i < options.length; i++){
    //         console.log(options[i]);
    //     }
    //  }
};

Question.prototype.ask = function() {
    
    console.log(this.question);
        for (i=0; i < this.options.length; i++){
            console.log(i+1 + '. ' + this.options[i]);
        }
    var input = prompt(this.question);
    if (input-1 === this.correct) {
        console.log('Your answer is correct! Try another question!');
    } else {
        console.log('Wrong answer, try another question.')
    }
}

var candyQuestion = new Question ('What\'s Jelanah\'s fav candy?',
    ['Air Heads', 'Hershey\'s', 'Sour Patch Watermelon'], 1);

var movieQuestion = new Question ('What\'s Jelanah\'s fav movie?',
    ['Taken', 'Friday', 'Non-Stop'], 0);


var colorQuestion = new Question ('What\'s Jelanah\'s fav color?',
    ['Blue', 'Red', 'Black', 'Orange'], 2);

var hobbyQuestion = new Question ('What\'s Jelanah\'s fav hobby?',
    ['Reading', 'Coding', 'Biking', 'Sewing'], 1);

 
var qs = [candyQuestion.ask(), movieQuestion.ask(), colorQuestion.ask(), hobbyQuestion.ask()];

// var rand = Math.floor(Math.random() * qs.length);

// qs[Math.floor(Math.random() * qs.length)];
})();

*/