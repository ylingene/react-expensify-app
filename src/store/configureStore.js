import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // Store creation
    // combineReducers input obj:
    // key: root state name
    // value: reducer that manages the state
    // helps move state into a proporty of the state
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        // // necessary one line for redux dev tool to work (copy paste from github - may change over time)
        // // replaced by composeEnhancers() to allow for thunk - return function from action generator
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

