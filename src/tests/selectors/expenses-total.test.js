import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('return 0 if no expenses', () =>{
    expect(selectExpensesTotal([])).toBe(0);
});

test('correctly add up a single expense', () => {
    expect(selectExpensesTotal([ expenses[0] ])).toBe(expenses[0].amount);
});

test('correctly add up multiple expenses', () => {
    const total = expenses[0].amount + expenses[1].amount + expenses[2].amount
    expect(selectExpensesTotal(expenses)).toBe(total);
});