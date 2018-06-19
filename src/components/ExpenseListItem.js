import React from 'react';
import { Link } from 'react-router-dom';

// destructuring
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

// if nothing passed into connect, component still gets access to dispatch()
export default ExpenseListItem;