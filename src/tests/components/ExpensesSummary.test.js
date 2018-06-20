import React from 'react';
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('render ExpensesSummary with more than 1 expenses', () => {
    const expensesCount = expenses.length;
    const expensesTotal = selectExpensesTotal(expenses);
    const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});

test('render ExpensesSummary with 1 expense', () => {
    const expensesCount = 1;
    const expensesTotal = selectExpensesTotal([expenses[0]]);
    const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});

test('render ExpensesSummary with 0 expenses', () => {
    const expensesCount = 0;
    const expensesTotal = selectExpensesTotal([]);
    const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});