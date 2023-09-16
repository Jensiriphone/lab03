// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// a) Print the total number of minutes that have passed so far today
console.log(today.getMinutes() + ' minutes have passed so far today')

// b) Print the total number of seconds that have passed so far today
console.log(today.getSeconds() + ' seconds have passed so far today')

// //c) Calculate and print your age as: 'I am x years, y months and z days old'
let birthDate = new Date('1993-11-17');
let ageMilliseconds = today - birthDate;
let ageYears = Math.floor(ageMilliseconds / (365 * 24 * 60 * 60 * 1000));
let ageMonths = Math.floor((ageMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
let ageDays = Math.floor((ageMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

console.log(`I am ${ageYears} years, ${ageMonths} months and ${ageDays} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

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