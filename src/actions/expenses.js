import uuid from 'uuid'; // create unique identifiers

// ADD_EXPENSE
export const addExpense = (
    {
        description = '',
        note = '', amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
// I guess you don't need to have just an expense or filter obj for an action if only using a piece of info
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});