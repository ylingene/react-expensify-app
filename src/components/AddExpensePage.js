import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'

// AddExpensePage refactored to use mapDispatchToProps as abstraction 
    // but also allow flexibility for testing by using a spy for addExpense

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense)); // refactored
        this.props.startAddExpense(expense);

        this.props.history.push('/'); // use browser routing to redirect back to expense dashboard
        // passed in from React Router when routing from a different component
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// create abstraction from component of global addExpense
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
