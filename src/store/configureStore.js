import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

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
        }),
        // necessary one line for redux dev tool to work (copy paste from github - may change over time)
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

