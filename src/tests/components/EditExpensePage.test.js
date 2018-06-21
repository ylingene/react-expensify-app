import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        expense={expenses[2]}
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
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
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, updates);
});

test('handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id })
});