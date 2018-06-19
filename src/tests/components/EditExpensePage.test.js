import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        expense={expenses[2]}
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history} />);
});

test('render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handle editExpense', () => {
    const updates = {
        ...expenses[2],
        note: 'hello world'
    };
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, updates);
});

test('handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id })
});