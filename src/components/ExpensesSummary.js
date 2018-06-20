import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
    <div>
        <p>{`Viewing ${expensesCount} expense${expensesCount === 1 ? '' : 's'} totalling ${numeral(expensesTotal / 100).format('$0,0.00')}`}</p>
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses)
    };
};

// const mapDispatchToProps = () => {

// }

export default connect(mapStateToProps)(ExpensesSummary);