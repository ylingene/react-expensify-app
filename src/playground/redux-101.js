import { createStore } from 'redux';

// Action generators - functions that return action objects
// WITH DESTRUCTURING input obj args
// set default value && default empty obj. if no obj passed in, default empty obj, doesn't have incrementBy, so set to 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// no default value or obj to force user correct input
const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

// Reducers
// 1. Reducers are pure functions. output determined only by input and uses only var within scope
// 2. Never change state or action
// pass in "current state" or default state
// pass function in that gets called once right away
// default state is used if none exists
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count // force required value - will crash without
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state; // return current state by dispath or default from first createStore
    }
}

// initialize the store for Redux
const store = createStore(counterReducer);

// subscribe gets called when state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - items sent to the store to update state
// send an object with type thru dispatch
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
