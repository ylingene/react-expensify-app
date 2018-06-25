import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

// async action - return a function
// after set up googleAuthProvider in firebase.js & firebase console, need to 
// initialize it with auth function e.g. signInWithPopup
export const startLogin = () => {
    return () => {
        // return promise chain
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};