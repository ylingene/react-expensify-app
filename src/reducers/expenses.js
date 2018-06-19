// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // spread operator works like concat
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            // if true, keep. else, remove from array
            return state.filter(({ id }) => action.id !== id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    // object spread operator (need to import package transform-object-rest-spread)
                    return {
                        ...expense,
                        ...action.updates // override values in expense with those in updates
                    }
                }
                else {
                    return expense; // do nothing if not match
                }
            });
        default:
            return state;
    }
};

export default expensesReducer;