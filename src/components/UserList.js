import React from 'react';
import {connect} from 'react-redux';
import User from './User';

//online user container
const UserList = (props) => {
    return(
        <div className='user_list col-xs-3'>
            {props.currentUserList.map((user, index) => (
                <User key={index} user={user}/>
            ))}
        </div>
    );
};

//get current users from state
const currentUserList = (state) => {
    return {
        currentUserList: state.userList
    };
};

export default connect(currentUserList)(UserList);