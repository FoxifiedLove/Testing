/*************************
* Variables and data types
*/

/*
var firstName = 'John';
var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(firstName, lastName, fullAge);

var job;
console.log(job);
// Variable naming rules
job = 'Teacher';
console.log(job);
*/




/***************************************
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he marrried? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he marrried? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/




/***************************************
* Basic operators
*/

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
// Math operators 
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/***************************************
* Operatorr precedence
*/


/*
var now = 2018;
var yearJohn = 1999;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6// 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/


/***************************************
* CODING CHALLANGE 1
*/

/*
var markHeight, markMass, markBmi, johnHeight, johnMass, johnBmi;

markHeight = 1.7; //meters
markMass = 60; //kg

johnHeight = 2;
johnMass = 80;

markBmi = markMass / markHeight^2;
johnBmi = johnMass / johnHeight^2;
console.log(markBmi, johnBmi);
var markHigherBMI = markBmi > johnBmi;


console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/




/***************************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var markHeight, markMass, markBmi, johnHeight, johnMass, johnBmi;

markHeight = 1.7; //meters
markMass = 60; //kg

johnHeight = 2;
johnMass = 80;

markBmi = markMass / markHeight^2;
johnBmi = johnMass / johnHeight^2;

if (markBmi > johnBmi) {
    console.log('Marks\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
/*
// var markHigherBMI = markBmi > johnBmi;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


/***************************************
* BOOLEAN LOGIC
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/


/***************************************
* The ternary Operator and switch statements
*/


/*
var firstName = 'John';
var age = 22;

// Ternarry operator 
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >=18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
} */

/*
// switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstname + ' does something else.');
}

age = 50;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


/***************************************
* Truthy and falsy values and operators
*/

// falsy values : undefined , null, 0, '', NaN
// truthy values : NOT falsy values
/*
var height;

height = '23';

if (height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable han not been defined')
}

// Equality operatorrs

if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/



/***************************************
* Coding challange 2
*/


/*
var johnsTeam = (89 + 120 + 103) / 3;
var mikesTeam = (116 + 94 + 123) / 3;
var marysTeam = (97 + 134 + 105) / 3;

console.log ('John\'s Team scored ' + johnsTeam + ' on average\n'  + 'Mike\'s Team scored ' + mikesTeam + ' on average\n' + 'Mary\'s Team scored ' + marysTeam + ' on average');

if (johnsTeam > mikesTeam && johnsTeam > marysTeam) {
    console.log('John\'s Team wins on average with a score of ' + johnsTeam);
} else if (mikesTeam > johnsTeam && mikesTeam > marysTeam) {
    console.log('Mike\'s Team wins on average with a score of ' + mikesTeam);
} else if (marysTeam > johnsTeam && marysTeam > mikesTeam) {
        console.log('Mary\'s Team wins on average with a score of ' + marysTeam);
} else {
    console.log('The score is ' + johnsTeam + ' for both teams which results in a Draw!' );
}
*/



/***************************************
* Functions
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0 ) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, ' John');
yearsUntilRetirement(1948, ' Mike');
yearsUntilRetirement(1969, ' Jane');
*/



/***************************************
* Function Statements and Expressions 
*/

// Function declaration
// Function whatDoYouDo(Job, firstName) {}

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cav in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/



/***************************************
* Arrays
*/

/*
// Inistialize new array
var names = ['John', 'Mark', 'Jane']
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/***************************************
* CODING CHALLANGE 3
*/

/*
function calculateTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percenrage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]]
console.log(tips, finalValues);
*/



/***************************************
* Objects and properties
*/


/*
//object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarrried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new object();
    jane.name = 'Jane';
    jane.birthYear = 1969;
    jane['lastname'] = 'smith';
    console.log(jane);
*/


/***************************************
* Objects and Methods
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarrried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge()
console.log(john)
*/


/***************************************
*Coding challange 4
*/


var john = {
    fullname: 'John smith',
    bills: [142, 48, 268,42],
    calculateTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i< this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullname: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calculateTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i< this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if (this.bills[i] < 100) {
                percentage = .2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


function calculateAverage(tips) {
    var sum = 0;
    for (var i = 0; i< tips.length; i++) {
        sum = sum +tips[i];
    }
    return sum / tips.length;
}
john.calculateTips();
mark.calculateTips();

john.average = calculateAverage(john.tips);
mark.average = calculateAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an averrage of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.average > john.average + '\'s family pays higher tips, with an averrage of $' + mark.average);
} 

