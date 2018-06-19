//
// Object destructuring
//
/*
const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 88,
    }
}

// destructuring w/ 1:1 variable matching
// w/ default value
const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);

// destructuring w/ renaming variable
// w/ default value
const { city, temp: temperature = 69 } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}


// challenge
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin',
    }
};

// if var doesn't exist, will use default
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
*/

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// square brackets []
// match by position, leave blank to skip value
// can set default value
const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

// challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}.`);