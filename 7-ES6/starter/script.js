
/****************************
 Lecture let and const
*/


/*
// ES5 
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

// ES6 
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller'; // cant chanmge 
// console.log(name6); 
*/

/*
// ES5 
function driversL5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName+ ', born in ' + yearOfBirth 
        + ' is officially allowed to drive.');

}
driversL5(true);

// ES6 -- code is block scoped
// We do not have access to variables in if statments, outside of those if statements because 
// the variables are block scoped and no longer function scoped.

/* Incorrect ES6
function driversL6(passedTest) {
    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
    console.log(firstName+ ', born in ' + yearOfBirth 
        + ' is officially allowed to drive.');
}
driversL6(true);
*/
/*
// ES6 correct
function driversL6(passedTest) {
   
    var firstName;
    const yearOfBirth = 1990;
    // const variables have to be defined in the same block
   
    if (passedTest) {
        let firstName = 'John';
       //  const yearOfBirth = 1990; // wont work
    }
    console.log(firstName+ ', born in ' + yearOfBirth 
        + ' is officially allowed to drive.');
}
driversL6(true); */


/* ES6 does not allow hoisting for variables
function driversL6(passedTest) {
   
    console.log(firstName); // wont work bc ES6 woint allow hoisting

    var firstName;
    const yearOfBirth = 1990;
    // const variables have to be defined in the same block
   
    if (passedTest) {
        let firstName = 'John';
       //  const yearOfBirth = 1990; // wont work
    }
    console.log(firstName+ ', born in ' + yearOfBirth 
        + ' is officially allowed to drive.');
}
driversL6(true); */


// Blog scoped variables ES5 
/*
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i); // i will equal 5 (from the loop)


// Blog scoped variables ES6
let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // i will equal 23 (the loop is a separate block)

*/


/*******************************************
 * Blocks and IIFEs
 */


 // ES6 keeps data private automatically because of its natural block privacy

 {
    const a = 1;
    let b = 2;
 }
 // console.log(a+b); // doesnt work 


/*******************************************
 * Strings
 */
/*
let firstName = 'John';
let lastName = 'Smith'; 
const year = 1990;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log(firstName + ' ' + lastName + ' is now '
    +  calcAge(year) + ' years old.');

// ES6 -- much quicker
console.log(`${firstName} ${lastName} is now ${calcAge(year)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // checks wg
console.log(n.startsWith('j'));
console.log(n.endsWith('h'));
console.log(n.endsWith('Sm'));
console.log(n.includes(' ')); // checks if something is in a string
console.log(n.includes('oh'));
console.log((`${firstName} `).repeat(5));
*/


/****************************
 * Arrow functions
 */
/*

const years = [1990, 1996, 1965, 2001];

//ES5

var ages5 = years.map (function (el) {
    return 2019 - el;
});
console.log(ages5);


//ES6 - Way 1 - one argument, one line of code
let ages6 = years.map(el => 2019- el);
console.log(ages6);
// Way 2 -- 2 arguments
ages6 = years.map((el, index) => `Age element us ${index +1}: ${2016-el}.`);
console.log(ages6);
// ES6 Way 3 -- 2+ arguments and 2+ lines of code 
ages6 = years.map((el, i) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element us ${i +1}: ${2016-el}.`;
});
console.log(ages6);

*/
/*************************
 * Arrow Functions 2: Lexical ".this"
 */

// ES5 
var box5 = {
    color: 'green',
    posotion: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This box number is ' +self.posotion + ' and it is ' + self.color;
            alert(str);
        });
    }
};
box5.clickMe();


const box6 = {
    color: 'green',
    posotion: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This box number is ' +this.posotion + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box5.clickMe();
