// 1. What are the results of these expressions? (answer first, then use console.log() to check)
"" + 1 + 0; //10
"" - 1 + 0; //-1
true + false; //1
!true; //false.
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; //9px
"$" + 4 + 5; //$9
"4" - 2; //2
"4px" - 2; //Nan
" -9 " + 5; //-9 5
" -9 " - 5; //Nan
null + 1; //1
undefined + 1; //Nan
undefined == null; //true
undefined === null; //false
" \t \n" - 2; //-2

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
//String should be writtem as a number. 
let three = "3";
let four = "4"; 
let thirty = "30"; 

//what is the value of the following expressions?
let addition = three + four; //34: Incorrect. As they are two strings, it will not add numbers, but join.
let multiplication = three * four; //12
let division = three / four; //0.75
let subtraction = three - four; //-1
let lessThan1 = three < four; //True
let lessThan2 = thirty < four; //True: Incorrect. Its comparing the first 2 numbers. 3 from 30 and the 4.

// 3. Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); //0 converts to boolean, meaning it is false. So wont print. Make true by adding '!'
if (!0) console.log("#1 zero is true"); //Answer
if ("0") console.log("#2 zero is true"); //prints: as it is true.
if (null) console.log("null is true"); //null is 0, so this is false. Negate.
if (!null) console.log("null is true"); //Answer
if (-1) console.log("negative is true"); //prints: as it is true.
if (1) console.log("positive is true"); //prints: as it is true.

// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 2,
  b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

// Answer:
// += : the result = result + 'string';
let result = a + b < 10 ? `${a} + ${b} is less than 10'` : `${a} + ${b} is greater than 10'`;
console.log(result);

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. 
// Test each version to make sure they work the same.
function getGreeting(name) {
  return "Hello " + name + "!";
}

// Answer:
let getGreeting = function(name) {
  return `Hello, ${name}!`;
};

let getGreeting = (name) => {
  return `Hello, ${name}!`;
};

console.log(getGreeting("John"));

// 6. a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers === 6) {
      return "You killed my father. Prepare to die.";
    } else return "Nice to meet you.";
  },
  // getCatchPhrase : (person) => person.numFingers === 6 ? "You killed my father. Prepare to die." : "You killed my father. Prepare to die.",
};

inigo.greeting(westley);
inigo.greeting(rugen);


// 7. The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = { //container
  score: 0,
  freeThrow() { //When freeThrow done, do what is in {} e.g add 1 to score.
    this.score++;
    return this; //returns the new score to the original container 'score' after it was altered. Add return this in order to chain. 
  },
  fouls: 0,
  foulAdd() {
    this.foul++;
    return this;
  },
  basket() {
    this.score += 2; //adds 2,
    return this;    //as above
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    console.log("Number of fouls is " + this.fouls);
    return this;
  },
  finalScore() {
    console.log("Final score is " + this.score);
    return this;
  },
  
};

//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
//all functions:
basketballGame.freeThrow().foulAdd().basket().threePointer().halfTime().basket().halfTime().finalScore();

// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function again with the new object.
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const melbourne = {
  name: "Melbourne",
  population: 5_078_000,
  state: "VIC",
  founded: "30 August 1835",
  timezone: "Australia/Melbourne",
};

for (let key in sydney) {
  //goes through each property in sydney(object)
  console.log(key + ":"); //prints each property name(key)
  console.log(sydney[key]); //prints each object value
}

for (let key in melbourne) {
  //goes through each property in melbourne(object)
  console.log(key + ":"); //prints each property name(key)
  console.log(melbourne[key]); //prints each object value
}

// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;
moreSports.push("volleyball");
moreSports.unshift("basketball");

// // b) Create a new dog2 variable equal to dog1 and give it a new value
let dog1 = {
  name: "Bingo",
  age: 1,
  size: "small",
};

let dog2 = dog1;

dog2.name = "Fluffy";
dog2.age = 5;
dog2.size = "Tiny";

// // // c) Create a new cat2 variable equal to cat1 and change its name property
let cat1 = {
  name: "Rosie",
  age: 7,
};

let cat2 = cat1;

cat2.name = "Button";

// // d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// // changed? Why?
console.log(moreSports);
console.log(dog1);
console.log(cat1);
// // Answer: 
// // unshift and push, altered by adding new values.
// // object stored by reference. second variable is the same memory as first variable, so if second variable altered, it will also alter first variabe.

// // e) Change the way the moreSports and cat2 variables are created to ensure the
// // originals remain independent
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports, 'Netball'];

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = {...cat1, name: "Pretty", breed: "Ragdoll"};

console.log(teamSports);
console.log(moreSports);
console.log(cat1);
console.log(cat2);

// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const person1 = new Person("John", 50, "Male");
const person2 = new Person("Sally", 25, "Female");

console.log(person1, person2);

// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.

class PersonClass {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

const person3 = new PersonClass("Harry", 30, "Male");
console.log(person3);

// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.canDrive = age >= 16;
}

const person4 = new Person("Taylor", 15);
console.log(person4);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.canDrive = age >= 16;
  }
}

const person5 = new Person("Anne", 30);
console.log(person5);