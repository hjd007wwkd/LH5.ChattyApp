import React from 'react';
import {connect} from 'react-redux';
import User from './User';

const UserList = (props) => {
    return(
        <div>
            {props.currentUserList.map((user, index) => (
                <User key={index} user={user}/>
            ))}
        </div>
    )
}

const currentUserList = (state) => {
    return {
        currentUserList: state.userList
    }
}

export default connect(currentUserList)(UserList);