import React from 'react';
import {connect} from 'react-redux';

const Nav = (props) => {
    return(
        <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
            <p className="count navbar-text navbar-right">{props.currentUserCount} Users Online</p>
        </nav>
    )
}

const currentUserCount = (state) => {
    return {
        currentUserCount: state.userList.length 
    }
}

export default connect(currentUserCount)(Nav);