// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.

function camelCaseA(str) {
    return str.replace(/-([a-z])/g, (match, g) => {
        return g.toUpperCase();
    });
};

console.log(camelCaseA('margin-left')) // marginLeft
console.log(camelCaseA('background-image')) // backgroundImage
console.log(camelCaseA('display')) // display

// // // b) Create variants of the camelCase function that use different types of for loops, and
function camelCaseB(str) {
    const words = str.split('-');
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
};

console.log(camelCaseB('margin-left')); // marginLeft


// // // c) with and without the conditional operator.
function camelCaseC(str) {
    const words = str.split('-');
    
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0] === words[i][0].toUpperCase() ? words[i] : words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
};

console.log(camelCaseC('margin-left')) // marginLeft
