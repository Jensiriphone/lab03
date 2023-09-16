// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.
let str = 'The itsy bitsy spider climbed up the water spout. Down came the rain and washed the spider out.';
let shortStr = str.slice(0, 23) + '...';
console.log(shortStr);

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr + '...';
    } else {
        return str;
    }
}

console.log(truncateString(str, 20));