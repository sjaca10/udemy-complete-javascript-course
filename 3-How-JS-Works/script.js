///////////////////////
// Lecture: Hoisting //
///////////////////////

calculateAge(1965);

function calculateAge(yearOfBirth) {
    console.log(new Date().getFullYear() - yearOfBirth);
}

// retirement(1990); TypeError: retirement is not a function cause hoisting
// only works with function statements and not with function expressions

var retirement = function(yearOfBirth) {
    console.log(65 - (2017 - yearOfBirth));
}

console.log(age); // undefined, Error if var age = 23; is not declared cause
                  // in Variable Object creation first examine all functions
                  // and variables and then assign a value in execution
                  // time and if the age variable is not declared the
                  // parser throws an error
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
