import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, editExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>
                    Remove
                </button>
            </div>
        );
    };
}

// also have access to props that's going to be passed into component
const mapStateToProps = (state, props) => {
    return {
        // props.match is part of React Router
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

// create abstraction from component of global addExpense
// props argument not necessary but available if needed
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, updates) => dispatch(editExpense(id, updates)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
