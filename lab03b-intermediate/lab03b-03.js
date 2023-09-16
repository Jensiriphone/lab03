// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. 
const animals = ['Tiger', 'Giraffe'];
// // a) Add 2 new values to the end
animals.push('Elephant', 'Zebra');
// // // b) Add 2 new values to the beginning
animals.unshift('Meerkat', 'Lion');
// // // c) Sort the values alphabetically
animals.sort();
// // // d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
function replaceMiddleAnimal(animals, newValue) {
    let middle = Math.floor(animals.length / 2);
        animals[middle] = newValue;
};

replaceMiddleAnimal(animals, 'Catfish');
console.log(animals);

// Easy way: //replacing by index
replaceMiddleAnimal = [...animals];
replaceMiddleAnimal[2]='Koala'; 

console.log(replaceMiddleAnimal);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
function findMatchingAnimals(arr, beginsWith) {
    return arr.filter((el) => el.toLowerCase().includes(beginsWith.toLowerCase()));
};

console.log(findMatchingAnimals(animals,'li'));
console.log(findMatchingAnimals(animals,'LI'));