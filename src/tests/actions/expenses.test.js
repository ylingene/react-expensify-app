import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('edit expense action object', () => {
    const action = editExpense('123abc', { note: 'update note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'update note'
        }
    });
});

test('setup add expense action object w/ provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

// done used to let Jest know test case is async
test('add expense to database and store', (done) => {
    const store = createMockStore({});
    store.dispatch(startAddExpense(expenses[1])).then(() => {
        // check if correct action was executed
        const actions = store.getActions(); // get actions that were dispatched (array returned)
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenses[1],
                id: expect.any(String)
            }
        });

        // check if data was inserted in database
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect({
            ...snapshot.val(),
            id: expenses[1].id
        }).toEqual(expenses[1]);
        done();
    });
});

test('add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        // check if correct action was executed
        const actions = store.getActions(); // get actions that were dispatched (array returned)
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseDefault,
                id: expect.any(String)
            }
        });

        // check if data was inserted in database
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});

// test('setup add expense action object w/ default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// });