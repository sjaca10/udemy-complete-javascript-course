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
/*
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
*/

////////////////////////////////
// Lecture: bind, call, apply //
////////////////////////////////
/*
// Allow to call a function and set the this variable manually
var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); // method borrowing

// Difference between apply and call method is that apply
// method accept an array as parameter
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// Bind method does not call inmediatly the function, first generate a copy
// of the method then call the method

var johnFriendly = john.presentation.bind(john, 'friendly'); // Carryer create a function based
                                                             // in another function with a base
                                                             // parameters
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');
emilyFormal('night');

// Real example

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

function isFullAge(limit, years) {
    return years >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

//////////////////////
// CODING CHALLENGE //
//////////////////////

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
 a) question itself
 b) then answers from which the player can choose the correct one (choose an adeuate data structure here,
    array, object, etc.)
 c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question
   should have a number) (Hint: write a method for the Question objects for this task).

5. Use the prompt function to ask the user for the correct answer. The user should input the number of the
   correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint:
   write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all
   your code is private and doesn't interfere with the other programmers code (Hint: we learned a special
   technique to do exactly that).

--- Experte level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write
   a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user
   writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to
    the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this
    with the tools you feel more comfortable)
*/

// My implementation
/*
var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                      ['Yes', 'No'],
                      0);

var q2 = new Question('What is the name of this course\'s teacher?',
                      ['John', 'Michael', 'Jonas'],
                      2);

var q3 = new Question('What does best describe coding?',
                      ['Boring', 'Hard', 'Fun', 'Tedious'],
                      2);

var questions = [q1, q2, q3];

var score = 0;
function ask(questions) {
    var selected = questions[Math.floor(Math.random() * questions.length)]
    console.log(selected.question);
    selected.answers.forEach(function(item, index) {
        console.log(index + ': ' + item);
    });
    answer(selected.correct, score)();
}

function answer(correct) {
    var choice = prompt('Choose an answer.');
    return function() {
        console.log(choice);
        if (choice == 'exit') {
            console.log('Points: ' + score);
        } else {
            if (choice == correct) {
                score += 1;
                console.log('Correct answer!');
            } else {
                console.log('Wrong answer. Try again.');
            }
            console.log('Your current ascore is ' + score);
            console.log('------------------------');
            nextQuestion(questions);
        }
    }
}

function nextQuestion(questions) {
    ask(questions);
}
*/

// Course implementation
/* Basic level
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(answer) {
        if (answer === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again!');
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Michael', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tedious'],
                          2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please selecte the correct answer'));

    questions[n].checkAnswer(answer);
})();
*/

/* Exoert level */
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(answer) {
        if (answer === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again!');
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Michael', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tedious'],
                          2);

    var questions = [q1, q2, q3];

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = parseInt(prompt('Please selecte the correct answer'));

        questions[n].checkAnswer(answer);

        nextQuestion();
    }

    nextQuestion();
})();

