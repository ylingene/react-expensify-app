import React from 'react';
import { connect } from 'react-redux'; // allow connection to the redux store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense, idx) => (
                        <ExpenseListItem
                            key={idx}
                            {...expense} />
                    ))
                )
            }
        </div>
    </div>
);

// define function in connect() to say what subset of info from store the component needs to access
// passed into as argument in connect()
// Note: this function has access to store state, and can define function to access data I need
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// connect() returns a function, pass component into it to create a HOC (higher order component). 
    // that function returns a component as well --> HOC
// if nothing passed into connect, will just give component access to dispatch() function
// different way to export default
export default connect(mapStateToProps)(ExpenseList);

// convenient becuse react-redux handles 'subscribing' to data changes in the store
// and the components is automatically updated w/ new data.
// only need to decide what to do with the data

// expense didn't need any data passed down, just accessed through redux store
// Question: when to use redux store vs. pass down through nested components??
