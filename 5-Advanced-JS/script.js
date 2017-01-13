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

// Object.create Build and object that inherits directly from the one that
// we passed into the first argument, helps to build complex inheritance structures
// because it allows to directly specifiy which object should be a prototype

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
