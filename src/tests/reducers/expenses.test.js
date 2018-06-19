import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('dont remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('add an expense', () => {
    const newExpense = {
        id: '-1',
        description: 'hello world',
        note: '',
        amount: 1234,
        createdAt: 1234567890
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('edit an expense', () => {
    const note = 'hello';
    const updates = {
        note
    };
    const updatedExpense = expenses[0];
    updatedExpense.note = note;

    const action ={
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);

    // could have just checked the expense's note's value is toBe() the new one
    expect(state).toEqual([updatedExpense, expenses[1], expenses[2]]);
});

test('do not edit expense if not found', () => {
    const note = 'hello';
    const updates = {
        note
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});