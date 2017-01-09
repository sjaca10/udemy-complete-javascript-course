// console.log('Hello world!');

////////////////////////
// Lecture: variables //
////////////////////////
/*
var name = 'John'; 
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

////////////////////////////
// Lecture: variables two //
////////////////////////////
/*
var name = 'John';
var age = 26;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job, isMarried);

job = 'Teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');

console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/

////////////////////////
// Lecture: operators //
////////////////////////
/*
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;
// 2016 - 52 = 1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

////////////////////////////////
// Lecture if/else statements //
////////////////////////////////
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if (isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}

// The === check type coertion

if (23 == "23") { // true becase JS realize type coertion on the fly
    console.log('Something to print...');
}


if (23 === "23") {
    console.log('Something else to print...');
}
*/

///////////////////////////////////////
// Lecture: boolean logic and switch //
///////////////////////////////////////
/*
var age = 20;

if (age < 20) {
    console.log('Is a teenager');
} else if (age >= 20 && age <= 30) {
    console.log('Is a young man');
} else {
    console.log('Is a man');
}

var job = prompt('What do you do?');

switch (job) {
    case 'teacher':
        console.log('Is a teacher');
        break;
    case 'driver':
        console.log('Is a driver');
        break;
    case 'cop':
        console.log('is a cop');
        break;
    default:
        console.log('Is something else');
        break;
}
*/

////////////////////////
// CODING CHALLENGE 1 //
////////////////////////
/*
John and a friend invented a simple game where the player with the highest
value of his height (in centimeters) plus five times his age wins
(what a silly game).

1. Create variables for the heights and ages of two friends and assign
them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score
in the string that you output to the console. Don't forget that there can be
a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need
the && operator to take the decision. If you can't solve this one, just
watch the solution, it's no problem.
*/

/*
function generateHeight() {
    return Math.floor((Math.random() * 200) + 1);
}

function generateAge() {
    return Math.floor((Math.random() * 100) + 1);
}

var friend1Height = generateHeight();
var friend1Age = generateAge();

var friend2Height = generateHeight();
var friend2Age = generateAge();

var friend3Height = generateHeight();
var friend3Age = generateAge();

var friend1Score = friend1Height + friend1Age * 5;
var friend2Score = friend2Height + friend2Age * 5;
var friend3Score = friend3Height + friend3Age * 5;

console.log('Friend 1');
console.log('Height: ' + friend1Height);
console.log('Age: ' + friend1Age);

console.log('Friend 2');
console.log('Height: ' + friend2Height);
console.log('Age: ' + friend2Age);

console.log('Friend 3');
console.log('Height: ' + friend3Height);
console.log('Age: ' + friend3Age);

console.log('Scores');
console.log('Friend 1: ' + friend1Score);
console.log('Friend 2: ' + friend2Score);
console.log('Friend 3: ' + friend3Score);

if (friend1Score > friend2Score && friend1Score > friend3Score) {
    console.log('Friend 1 wins.');
} else if (friend2Score > friend1Score && friend2Score > friend3Score) {
    console.log('Friend 2 wins.');
} else if (friend3Score > friend1Score && friend3Score > friend2Score) {
    console.log('Friend 3 wins.');
} else {
    console.log('It is a draw');
}
*/

////////////////////////
// Lecture: Functions //
////////////////////////
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);


function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

/////////////////////////////////////////
// Lecture: statements and expressions //
/////////////////////////////////////////
/*
function someFun(par) { // Function statement (performs and action)
    // code
}

var someFun = function(par) { // Function expression (produce a value)
    // code
}

// Expressions (produces and output)
3 + 4;
var x = 3;

// Statements (performs an action and not produce an inmediate value)
if (x === 5) {
    // do something
}
*/

/////////////////////
// Lecture: Arrays //
/////////////////////
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);

names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'Teacher', false];

john.push('blue'); // Add element at the end of array
john.unshift('Mr.'); // Add element at the beginning of the array

john.pop(); // Delete last element of the array
john.shift(); // Delete first element of the array

console.log(john.indexOf('Smith'));

console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}
*/

/////////////////////////////////////
// Lecture: objects and properties //
/////////////////////////////////////
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
};

console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'Retired';
jane['isMarried'] = true;

console.log(jane);
*/

//////////////////////////////////
// Lecture: objects and methods //
//////////////////////////////////
/*
// Version 1 of John
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: [
        'Jane',
        'Mark',
        'Bob',
    ],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    },
};

console.log(john);
console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();

john.age = age;

console.log(john);


// Version 2 of John
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: [
        'Jane',
        'Mark',
        'Bob',
    ],
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    },
};

john.calculateAge();
console.log(john);

var mike = {
    name: 'Mike',
    yearOfBirth: 1990,
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    },
};

mike.calculateAge();
console.log(mike);
*/

//////////////////////////////////
// Lecture: loops and iteration //
//////////////////////////////////

for (var i = 0; i < 10; i++) {
    console.log(i);
}

/*
0, true, print 0, update 0 to 1
1, true, print 1, update 1 to 2
...
9, true, print 9, update 9 to 10
10, false, end loop
*/

var names = [
    'John',
    'Jane',
    'Mary',
    'Mark',
    'Bob',
];

// For loops //

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('Reverse')

for (var i = names.length - 1; i > -1; i --) {
    console.log(names[i]);
}

// While loops //
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 0; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

for (var i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(i);
}
