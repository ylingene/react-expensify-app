import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => (
    // need exact=true for `/` route to prevent bold on base route (exact matching)
    // set activeClassName to set the style with given classname in quotes
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;
