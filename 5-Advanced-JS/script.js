// Function constructor The newly created object inherits from the constructor's
// prototype property

// Old repetitive style object
/*
var john = {
    name: 'John':
    yearOfBirth: 1990,
    job: 'Teacher',
};
*/
/*
// Pattern: Function Constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
//    this.calculateAge = function() {
//        console.log(new Date().getFullYear() - this.yearOfBirth);
//    }
}

Person.prototype.calculateAge = function() {
    console.log(new Date().getFullYear() - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

// new operator create a new EMPTY object
var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired')

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

///////////////////
// Object.create //
///////////////////

// Build and object that inherits directly from the one that
// we passed into the first argument, helps to build complex inheritance structures
// because it allows to directly specifiy which object should be a prototype
/*
// First define an object (proto) with the function
var personProto = {
    calculateAge: function() {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    },
}

// Then use Object.create method and set as param the previos object defined (proto)
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane', },
    yearOfBirth: { value: 1969, },
    job: { value: 'Designer', },
});
*/

///////////////////////////
// Primitives vs objects //
///////////////////////////
/*
// Primitives (every primitive variable holds its own value)
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects (every object is a reference to the object in the memory)
var obj1 = {
    name: 'John',
    age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1);
console.log(obj2);

// Functions (same behaviour, the primitive passed to a function it is not changed
// by the function but the object it is changed)
var age = 27;
var obj1 = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj1);
console.log(age);
console.log(obj1);
*/

/////////////////////////////////////////////
// Lecture: Passing functions as arguments //
/////////////////////////////////////////////

// JavaScript is first-class functions
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(yearOfBirth) {
    return new Date().getFullYear() - yearOfBirth;
}

function isFulAge(years) {
    return years >= 18;
}

function maxHeartRate(age) {
    if (age >= 18 && age <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFulAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

////////////////////////////////////////////
// Lecture: functions returning functions //
////////////////////////////////////////////
/*
function interviewQuestion (job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher'); // Like storing a function expression
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

///////////////////
// Lecture: IIFE //
///////////////////
/*
// Normal function declaration and calling the function
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/
/*
// IIFE pattern. Parses understand this function declartion as expression and
// calling the function
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score); Scope is private, ReferenceError

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(3);
*/

///////////////////////
// Lecture: closures //
///////////////////////

function retirement (retirementAge) {
    var a = ' years left until retirement.'
    return function (yearOfBirth) {
        var age = new Date().getFullYear() - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
retirementGermany(1990);

var retirmentIceland = retirement(67);
retirmentIceland(1990);

// retirement(66)(1990);

// Closure challenge
function interviewQuestion (job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('John');
interviewQuestion('teacher')('Mike');
interviewQuestion('other')('Jane');
