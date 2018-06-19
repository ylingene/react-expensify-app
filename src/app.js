import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // connect react & redux, HOC
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 3 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 2 }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// Provider gives access to the redux store for all compomnents in it
// if Overall component (eg. our router) given, then all components have access
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
