import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // array representation in firebase
// const firebaseNotes = {
//     notes: {
//         asldkf: { // id
//             title: 'First note',
//             body: 'hello'
//         }
//     }
// };

// const expenses = [{
//     description: 'blah',
//     amount: '1950',
//     note: '',
//     createdAt: 0
// }, {
//     description: 'woah',
//     amount: '12712',
//     note: '',
//     createdAt: 19
// }, {
//     description: 'pam',
//     amount: '23987',
//     note: '',
//     createdAt: -1000
// }];

// expenses.map((expense) => {
//     database.ref('expenses').push(expense);
// });

// database.ref('expenses').on('value', 
//     (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((chileSnapshot) => {
//             expenses.push({
//                 id: chileSnapshot.key,
//                 ...chileSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// // child_removed listener
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed listener
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// listen for changes
// .off() removes subscriptions
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const name = snapshot.val().name;
//     const job = snapshot.val().job.title;
//     const company = snapshot.val().job.company;
//     console.log(`${name} is a ${job} at ${company}.`);
// }, (e) => {
//     // error
//     console.log('error: ', e);
// }); 
// onValueChange.off();


// get data once (no subscription)
// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// database.ref().set({
//     name: 'Bill',
//     age: 19,
//     stressLevel: 1,
//     job: {
//         title: 'noob',
//         company: 'NA'
//     },
//     sketchy: false,
//     location: {
//         city: 'Unknown'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed. ', e);
// });

// database.ref().update({
//     'job/company': 'Amazon',
//     stressLevel: 8,
//     'location/city': 'Portland'
// });

// database.ref('sketchy').remove();
// database.ref('sketchy').set(null); // alternative remove but not explicit