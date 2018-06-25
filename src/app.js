import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // connect react & redux, HOC
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

// Provider gives access to the redux store for all compomnents in it
// if Overall component (eg. our router) given, then all components have access
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// reduce duplicate code below plus don't render if already has rendered
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// state changes on login/logout
firebase.auth().onAuthStateChanged((user) => {
    // just logged in if user exists
    // redirect page if on log in page (will run on refresh on every page refresh)
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            // redirect if on login page
            if (history.location.pathname === '/') {
                console.log('hello??');
                history.push('/dashboard');
            }
        });
    }
    else {
        console.log('here');
        store.dispatch(logout());
        renderApp();
        history.push('/'); // bring back to log in page
    }
});