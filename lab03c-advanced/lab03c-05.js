// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?
// let car = {
// make: "Porsche",
// model: '911',
// year: 1964,
// description() {

// console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
// }
// };

// car.description(); //works
// setTimeout(car.description, 200); //fails - This does not refer to the car. Passing a function to be executed later.

// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function
// setTimeout(car.description.bind(car), 200);

// // b) Change the year for the car by creating a clone of the original and overriding it
// let cloneCar = { ...car};
// cloneCar.year = 2023;

// cloneCar.description();

// c) Does the delayed description() call use the original values or the new values from
// b)? Why?
//original. bind bounds 'this'to the car object, not cloneCar.

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description: function() {
    
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }.bind(this)
    };

    setTimeout(car.description, 1000);

// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)
// let cloneCar2 = { ...car};
// cloneCar2.make = 'Toyota';

// cloneCar2.description();
