import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
    // BrowserRouter requires on elt in it, so sandwich stuff in a div
    // if no path specified, it will always match (show up everywhere)
    // Switch does one single route match
    // :id extracts value after / and saves it as that var (prop) (passed in through Router)
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router> // Changed from BrowserRouter to Router to allow for self created browser history
    // can now use history in other parts rather than it being only within BrowserRouter and in
    // components that initialized by the React router
);

export default AppRouter;