// // 1. Create a function that takes a string as a parameter and returns the string with the first
// // character of each word changed into a capital letter, as in the example below. Test it with
// // different strings.
// console.log(ucFirstLetters("los angeles") ) //Los Angeles

// function ucFirstLetters(str) {
//     const arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(" ");
//   };

// // 2. Create a function truncate(str, max) that truncates a given string of text if its total
// // length is greater than the max length. It should return either the truncated text, with an
// // ellipsis (...) added to the end if it was too long, or the original text otherwise.
// // b) Write another variant of the truncate function that uses a conditional operator.

// let str = 'The itsy bitsy spider climbed up the water spout. Down came the rain and washed the spider out.';
// let shortStr = str.slice(0, 23) + '...';
// console.log(shortStr);

// function truncateString(str, num) {
//     if (str.length > num) {
//         let subStr = str.substring(0, num);
//         return subStr + '...';
//     } else {
//         return str;
//     }
// }

// console.log(truncateString(str, 20));

// // 3. Use the following animals array for the below tasks. Test each one by printing the result to
// // the console. Review the following link for tips:

// // https://developer.mozilla.org/en-
// // US/docs/Web/JavaScript/Reference/Global_Objects/Array

// const animals = ['Tiger', 'Giraffe'];

// // // a) Add 2 new values to the end
// animals.push('Elephant', 'Zebra');
// // // // b) Add 2 new values to the beginning
// animals.unshift('Meerkat', 'Lion');
// // // // c) Sort the values alphabetically
// animals.sort();
// // // // d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// let middle = animals.length / 2;
// animals.splice(middle++, 0, 'Snake');

// console.log(animals);

// // Easy way: //replacing by index
// replaceMiddleAnimal = [...animals];
// replaceMiddleAnimal[2]='Koala'; 

// console.log(replaceMiddleAnimal);

// // e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// // containing all the animals that begin with the beginsWith string. Try to make it work
// // regardless of upper/lower case.

// function findMatchingAnimals(arr, beginsWith) {
//     return arr.filter((el) => el.toLowerCase().includes(beginsWith.toLowerCase()));
// };

// console.log(findMatchingAnimals(animals,'li'));
// console.log(findMatchingAnimals(animals,'LI'));

// // 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// // 'margin-left' into camel-cased 'marginLeft'.
// // The function should remove all dashes, and uppercase the first letter of each word after a
// // dash.
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

// function camelCase(str) {
//     return str.replace(/-([a-z])/g, (match, g) => {
//         return g.toUpperCase();
//     });
// };

// // // // b) Create variants of the camelCase function that use different types of for loops, and
// function camelCase(str) {
//     const words = str.split('-');
//     for (let i = 1; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join('');
// };

// // // c) with and without the conditional operator.
// function camelCase(str) {
//     const words = str.split('-');
    
//     for (let i = 1; i < words.length; i++) {
//         words[i] = words[i][0] === words[i][0].toUpperCase() ? words[i] : words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join('');
// };


// // 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// // following:
// // let twentyCents = 0.20
// // let tenCents = 0.10
// // console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // // 0.2 + 0.1 = 0.30000000000000004
// // We can sometimes avoid this using the toFixed function to force the number of decimal
// // places as below, but it’s not always useful:
// // let fixedTwenty = twentyCents.toFixed(2);
// // let fixedTen = tenCents.toFixed(2);
// // console.log(fixedTwenty + fixedTen) //why is this not working?
// // a) Explain why the above code returns the wrong answer
// // Computer uses binery number system.
// // b) Create a function currencyAddition(float1, float2) which safely adds the two
// // decimal numbers float1 and float2 and returns the correct float result.
// // c) Create a function currencyOperation(float1, float2, operation) which
// // safely performs the given operation (either +, -, / or *) on the two numbers and returns

// // function currencyAddition(a, b) {
// //     return result = (a + b),
// //     this.result.toFixed(2);
// // };


// function currencyOperation(float1, float2, operator) {
//     const num1 = float1;
//     const num2 = float2;
//     let result;

//     switch(operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
        
//         case '*':
//             result = num1 * num2;
//             break;    

//         };
//         return result.toFixed(2);
//     };

//     console.log(currencyOperation(0.2, 0.1, '+'));
//     console.log(currencyOperation(0.2, 0.1, '-'));
//     console.log(currencyOperation(0.2, 0.1, '/'));
//     console.log(currencyOperation(0.2, 0.1, '*'));

// // the correct float result. https://developer.mozilla.org/en-
// // US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// // d) (Extension) Extend the above function to include a fourth argument numDecimals
// // which allows the operation to support different amounts of decimal places from 1 to 10.
// // HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// // different values as well as the below:
// // console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// // console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// // *unsure*

// // 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// // include duplicates. Your function should return an array containing only the unique values
// // from duplicatesArray.
// // Test with the following arrays and create another one of your own. // Use Set(), Array.filter()

// // const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// // const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// // const fruit = ['apple', 'orange', 'banana', 'mango', 'strawberry', 'orange', 'banana']
// // console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// // console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// // function unique(duplicatesArray) {
// //     return result = new Set(duplicatesArray);
// // };

// // console.log(unique(colours));
// // console.log(unique(testScores));
// // console.log(unique(fruit));

// // 7. Use the following array of book objects to practice the array functions for map, find and
// // filter. Test each of your answers to the below tasks.
// // let books = [
// // { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// // { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
// // { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
// // { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
// // { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// // ];
// // a) Write a function getBookTitle(bookId) that uses the find function to return the
// // title of the book object with the matching id. //how to return only title?

// // function getBookTitle(bookId) {
// //    return result = books.find(books => books.id === bookId);
// // };

// // console.log(getBookTitle(1));


// // b) Write a function getOldBooks() that uses the filter function to return all book
// // objects written before 1950.

// // function getOldBooks() {
// //     return books.filter(books => books.year <= 1950);
// // };

// // let oldBooks = getOldBooks();

// // console.log(oldBooks);

// // c) Write a function addGenre() that uses the map function to add a new genre property
// // to all of the above books, with the value ‘classic’. //changed const to let in original

// // function addGenre(newGenre) {
// //     books = books.map(books => {
// //         return {...books, genre: newGenre}; //... is spread
// //     });
// // };

// // addGenre('classics');
// // console.log(books);

// // d) (Extension) Write a function getTitles(authorInitial) that uses map and
// // filter together to return an array of book titles for books written by authors whose
// // names start with authorInitial.

// // e) (Extension) Write a function latestBook() that uses find and forEach to get the
// // book with the most recent publication date.

// // 8. The following code creates a new Map object for storing names beginning with A, B, or C
// // with their phone numbers.
// // const phoneBookABC = new Map() //an empty map to begin with
// // phoneBookABC.set('Annabelle', '0412312343')
// // phoneBookABC.set('Barry', '0433221117')
// // phoneBookABC.set('Caroline', '0455221182')

// // a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// // b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// // c) Update the phone number for Caroline
// // d) Write a function printPhoneBook(contacts) that prints the names and phone
// // numbers in the given Map
// // e) Combine the contents of the two individual Maps into a single phoneBook Map
// // f) Print out the full list of names in the combined phone book

// // phoneBookABC.set('Caroline', '0210022985')

// // const phoneBookDEF = new Map()
// // phoneBookDEF.set('Dylan', '0211233456')
// // phoneBookDEF.set('Ethan', '0210092238')
// // phoneBookDEF.set('Fatima', '0212276356')

// // function printBook(phoneBook) {
// //     return phoneBook;
// // };

// // const fullPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// // console.log(fullPhoneBook);

// // 9. Given the below salaries object, perform the following tasks.
// let salaries = {
// "Timothy" : 35000,
// "David" : 25000,
// "Mary" : 55000,
// "Christina" : 75000,
// "James" : 43000
// };

// // a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

// Object.keys(salaries);
// Object.values(salaries);

// const allSalaries  = Object.values(salaries);
// const totalSalaries = allSalaries.reduce((accumulator, allSalaries) => {
//     return accumulator + allSalaries;
// }, 0);

// console.log(totalSalaries);

// // b) Write a function topEarner(salaries) that calculates and returns the name of the person
// // earning the highest salary

// let salaryArr = Object.entries(salaries);
// salaryArr.sort((a,b) => a[1] - b[1]);
// let sortedSalary = Object.fromEntries(salaryArr);

// let highestSalary = 0;
// let highestSalaryEarner = "";

// for (let employee in salaries) {
//     if (salaries[employee] > highestSalary) {
//         highestSalary = salaries[employee];
//         highestSalaryEarner = employee;
//     };
// };

// console.log(`${highestSalaryEarner} is the highest earner`);

// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// // a) Print the total number of minutes that have passed so far today
console.log(today.getMinutes() + ' minutes have passed so far today')
// // b) Print the total number of seconds that have passed so far today
console.log(today.getSeconds() + ' seconds have passed so far today')

// // c) Calculate and print your age as: 'I am x years, y months and z days old'
// function myAge(birthYear) {
//     let currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// };

// console.log(`I am ${myAge(1993)} years, y months and z days old`);


// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

let date1 = new Date('05/05/2010'); //m-d-y
let date2 = new Date('05/10/2010');

let difference = date2.getTime() - date1.getTime(); //milisec

let days = Math.ceil(difference / (1000 * 3600 * 24)); //round up, 1000 mili, (60sec x 60sec) 24hr
console.log(days);

function daysInBetween(start, end) {
    let date1 = new Date(start);
    let date2 = new Date(end);

    let difference = date2.getTime() - date1.getTime();

    let days = Math.ceil(difference / (1000 * 3600 * 24));
   
    return days;
};

console.log(daysInBetween('05/05/2010', '05/10/2010'));