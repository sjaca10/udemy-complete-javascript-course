// Function constructor

// Old repetitive style object
/*
var john = {
    name: 'John':
    yearOfBirth: 1990,
    job: 'Teacher',
};
*/

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
