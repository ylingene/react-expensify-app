// HOC == Higher Order Components
// A component (HOC) that renders another component
// Goals:
    // Reuse code
    // Render hijacking
    // Prop manipulation
    // Abstract state 
// Allows to modify existing components without having to rewrite it multiple times
//  like adding some additional (warning, error) information 

import React from 'react';
import ReactDOM from 'react-dom';

// regular component (stateless functional component)
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // spread opterator to pass all props down
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : 
                <p>This is private info. Please log in to view the information.</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info); // new component
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));