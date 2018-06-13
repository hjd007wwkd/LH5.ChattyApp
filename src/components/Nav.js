import React from 'react';
import {connect} from 'react-redux';

const Nav = (props) => {
    return(
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        Chatty
                    </a>
                </div>
                <p className="count navbar-text navbar-right">{props.currentUserCount} Users Online</p>
            </div>
        </nav>
    )
}

const currentUserCount = (state) => {
    return {
        currentUserCount: state.userList.length 
    }
}

export default connect(currentUserCount)(Nav);