import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// wrapper around Route to add conditional logic (is or is not authenticated user)

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest // all the stuff that we did not destructure (you name the var)
}) => (
    // somehow the right things are passed into component callback function as props
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to='/' />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id // flip to boolean
});

export default connect(mapStateToProps)(PrivateRoute);