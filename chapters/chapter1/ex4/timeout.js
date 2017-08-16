// asynchronous code
// prints second
setTimeout(function() {
    console.log('In timeout!');
}, 0);

// prints first
console.log('Not in timeout.');