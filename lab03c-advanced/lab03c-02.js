// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
//Prints from bottom to top. As # has not delay, #3 prints after 0ms, #2 prints after 20ms/0.02 sec, #1 after 100ms/0.1 sec.

// b) Rewrite delayMsg as an arrow function
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms');

// d) Use clearTimeout to prevent the fifth test from printing at all.
const delayMsg = (msg) => {
        console.log(`This message will be printed after a delay: ${msg}`)
    }
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
let cancel5 = setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms');
clearTimeout(cancel5);

//Original:
// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')