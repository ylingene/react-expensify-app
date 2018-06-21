import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

// AddExpensePage refactored to use mapDispatchToProps as abstraction 
    // but also allow flexibility for testing by using a spy for addExpense

let startAddExpense, history, wrapper;

// global jest functions to run before each test in this file
// reduce duplicate code
beforeEach(() => {
    startAddExpense = jest.fn(); // create spy
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});