const promise = new Promise((resolve, reject) => {
    // promise can only be resolved or rejected once
    // can only pass one argument to resolve & reject
    setTimeout(() => {
        // resolve('This is my resolved data');
        reject('Something went wrong');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});

// can promise chain
// downstream .then() doesn't receive data unless previous .then() returns data
    // more useful to return a new promise in the .then() so next .then() is tied to its own promise
    // so reduce need for nested callbacks
// promise.then().then().catch();

console.log('after');